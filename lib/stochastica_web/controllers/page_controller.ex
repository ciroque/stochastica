defmodule StochasticaWeb.PageController do
  use StochasticaWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
