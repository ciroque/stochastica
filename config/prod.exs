use Mix.Config

config :stochastica, StochasticaWeb.Endpoint,
  load_from_system_env: true,
  http: [:inet6, port: System.get_env("PORT") || 4000],
  cache_static_manifest: "priv/static/cache_manifest.json",
  secret_key_base: System.get_env("STOCHASTICA_SECRET_KEY_BASE")

config :logger, level: :info
