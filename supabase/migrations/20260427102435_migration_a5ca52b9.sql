-- Table contact_requests pour stocker les demandes de contact
CREATE TABLE contact_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'spam')),
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour le rate limiting par IP
CREATE INDEX idx_contact_requests_ip_created ON contact_requests(ip_address, created_at);

-- RLS: Activer et permettre INSERT anonyme (formulaire public), pas de SELECT public
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_contact" ON contact_requests 
  FOR INSERT 
  WITH CHECK (true);

-- Table newsletter_subscribers pour les abonnements newsletter
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  confirmed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS: Activer et permettre INSERT anonyme
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_newsletter" ON newsletter_subscribers 
  FOR INSERT 
  WITH CHECK (true);

-- Commentaires pour documentation
COMMENT ON TABLE contact_requests IS 'Stores contact form submissions from the website';
COMMENT ON TABLE newsletter_subscribers IS 'Stores newsletter subscription emails';