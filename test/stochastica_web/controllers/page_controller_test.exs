defmodule StochasticaWeb.PageControllerTest do
  use StochasticaWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get(conn, "/")
    assert html_response(conn, 200) =~ "stochastica"
  end
end
