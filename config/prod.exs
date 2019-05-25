use Mix.Config

config :stochastica, StochasticaWeb.Endpoint,
  on_init: {Exertrax.Web.Endpoint, :load_from_system_env, []},
  http: [port: {:system, "PORT"}, ip: {0, 0, 0, 0}],
  cache_static_manifest: "priv/static/cache_manifest.json",
  secret_key_base: System.get_env("STOCHASTICA_SECRET_KEY_BASE"),
  server: true

config :stochastica, StochasticaWeb.Endpoint,
       secret_key_base: "6kTV5ExO0RWjfBq6SC/E61pyGRnS9+dB0jI3amI6OYpwZK87dPdRZ2Jh2S6y3a8r"

config :logger, level: :info
