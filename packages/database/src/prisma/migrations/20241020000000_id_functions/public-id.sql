CREATE OR REPLACE FUNCTION public.public_id()
    RETURNS TEXT
    LANGUAGE plpgsql
AS
$$
BEGIN
    RETURN nanoid(10, '23456789abcdefghijklmnopqrstuvwxyz', 1.85);
END;
$$;

ALTER FUNCTION public.public_id() OWNER TO postgres;
GRANT EXECUTE ON FUNCTION public.public_id() TO anon, authenticated, service_role;
