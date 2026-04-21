-- Schema para analytics de Ciudad Secreta
-- Ejecutar en Neon Console

-- Tabla de sesiones (una por visita)
CREATE TABLE sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_agent TEXT,
    ip_hash VARCHAR(64),
    country VARCHAR(2),
    city VARCHAR(100),
    device_type VARCHAR(20),
    browser VARCHAR(50),
    os VARCHAR(50),
    screen_width INT,
    screen_height INT,
    referrer TEXT,
    entry_page VARCHAR(500),
    time_on_site_seconds INT DEFAULT 0,
    pages_visited INT DEFAULT 0,
    is_bounce BOOLEAN DEFAULT TRUE
);

-- Tabla de eventos (clicks, navegación, etc.)
CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id VARCHAR(255) REFERENCES sessions(session_id),
    event_type VARCHAR(50) NOT NULL,
    event_category VARCHAR(50),
    event_label VARCHAR(255),
    event_value VARCHAR(255),
    page_path VARCHAR(500) NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    metadata JSONB DEFAULT '{}'
);

-- Tabla de páginas vistas
CREATE TABLE page_views (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id VARCHAR(255) REFERENCES sessions(session_id),
    page_path VARCHAR(500) NOT NULL,
    page_title VARCHAR(255),
    time_on_page_seconds INT DEFAULT 0,
    scroll_depth INT DEFAULT 0,
    exit_page BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de clicks
CREATE TABLE clicks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id VARCHAR(255) REFERENCES sessions(session_id),
    element_id VARCHAR(255),
    element_type VARCHAR(50),
    element_text VARCHAR(255),
    page_path VARCHAR(500) NOT NULL,
    x_position INT,
    y_position INT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para mejor rendimiento
CREATE INDEX idx_events_session ON events(session_id);
CREATE INDEX idx_events_type ON events(event_type);
CREATE INDEX idx_events_page ON events(page_path);
CREATE INDEX idx_events_timestamp ON events(timestamp);

CREATE INDEX idx_pageviews_session ON page_views(session_id);
CREATE INDEX idx_pageviews_page ON page_views(page_path);

CREATE INDEX idx_clicks_session ON clicks(session_id);
CREATE INDEX idx_clicks_page ON clicks(page_path);

-- Función para actualizar tiempo en sitio
CREATE OR REPLACE FUNCTION update_session_time()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE sessions 
    SET time_on_site_seconds = EXTRACT(EPOCH FROM (NOW() - created_at))::INT,
        pages_visited = pages_visited + 1,
        is_bounce = FALSE
    WHERE session_id = NEW.session_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para actualizar sesión al recibir evento
CREATE TRIGGER update_session_on_event
AFTER INSERT ON events
FOR EACH ROW
EXECUTE FUNCTION update_session_time();

-- Trigger para actualizar sesión al recibir page_view
CREATE TRIGGER update_session_on_pageview
AFTER INSERT ON page_views
FOR EACH ROW
EXECUTE FUNCTION update_session_time();

-- Tabla de resumen diário
CREATE TABLE daily_stats (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    date DATE NOT NULL UNIQUE,
    unique_visitors INT DEFAULT 0,
    total_pageviews INT DEFAULT 0,
    total_clicks INT DEFAULT 0,
    bounce_rate DECIMAL(5,2) DEFAULT 0,
    avg_time_on_site DECIMAL(10,2) DEFAULT 0,
    top_pages JSONB DEFAULT '[]',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
