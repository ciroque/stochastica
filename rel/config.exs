~w(rel plugins *.exs)
|> Path.join()
|> Path.wildcard()
|> Enum.map(&Code.eval_file(&1))

use Mix.Releases.Config,
    default_release: :default,
    default_environment: Mix.env()

environment :dev do
  set dev_mode: true
  set include_erts: false
  set cookie: :"dcq1w7i;^sm*ZFdX*jFv@1BPKS{bX;kZH[,2kIy@s.Z&)(*B:|a%L5<9Ys0:>VH!"
end

environment :prod do
  set include_erts: true
  set include_src: false
  set cookie: :"rgETc!X:L*k[<>?Fu4/^c6cb<kIFk8Z1D*svyV;>Rz7i;vIwoZ6>R;)1=<s<m.H$"
  set vm_args: "rel/vm.args"
end

release :stochastica do
  set version: current_version(:stochastica)
  set applications: [
    :runtime_tools
  ]
end

