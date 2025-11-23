import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface TarefaExposicao {
  dia: string;
  tarefa: string;
  duracao: string;
  ansiedadeInicial: string;
  ansiedadeMedia: string;
  ansiedadeFinal: string;
}

const RegistoExposicao = () => {
  const { toast } = useToast();
  const [situacao, setSituacao] = useState("");
  const [tarefas, setTarefas] = useState<TarefaExposicao[]>([
    { dia: "", tarefa: "", duracao: "", ansiedadeInicial: "", ansiedadeMedia: "", ansiedadeFinal: "" }
  ]);

  useEffect(() => {
    const saved = localStorage.getItem("registo-exposicao");
    if (saved) {
      const data = JSON.parse(saved);
      setSituacao(data.situacao || "");
      setTarefas(data.tarefas || [{ dia: "", tarefa: "", duracao: "", ansiedadeInicial: "", ansiedadeMedia: "", ansiedadeFinal: "" }]);
    }
  }, []);

  const handlePrint = () => {
    window.print();
    toast({
      title: "Pronto para imprimir",
      description: "A janela de impressão foi aberta",
    });
  };

  const handleSave = () => {
    localStorage.setItem("registo-exposicao", JSON.stringify({ situacao, tarefas }));
    toast({
      title: "Guardado com sucesso",
      description: "O registo foi guardado localmente",
    });
  };

  const addTarefa = () => {
    setTarefas([...tarefas, { dia: "", tarefa: "", duracao: "", ansiedadeInicial: "", ansiedadeMedia: "", ansiedadeFinal: "" }]);
  };

  const updateTarefa = (index: number, campo: keyof TarefaExposicao, valor: string) => {
    const novas = [...tarefas];
    novas[index] = { ...novas[index], [campo]: valor };
    setTarefas(novas);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50 no-print">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Guardar
              </Button>
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Printer className="h-4 w-4 mr-2" />
                Imprimir
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-trust/10 mb-4">
            <Eye className="w-8 h-8 text-therapeutic-trust" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Registo da Sessão de Exposição
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhe o progresso das tarefas de exposição e monitorize os níveis de ansiedade
          </p>
        </div>

        <Card className="p-8 mb-6 bg-card/80 backdrop-blur-sm">
          <div className="space-y-8">
            <Card className="bg-therapeutic-trust/5 p-6 border-therapeutic-trust/20">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Eye className="w-5 h-5 text-therapeutic-trust" />
                Sobre a terapia de exposição
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A terapia de exposição é uma técnica eficaz para tratar ansiedade e fobias. Este registo ajuda a monitorizar 
                os níveis de ansiedade antes, durante e depois das tarefas de exposição, permitindo visualizar o progresso ao longo do tempo.
              </p>
            </Card>

            {/* Descrição da Situação */}
            <div className="space-y-3">
              <Label htmlFor="situacao" className="text-lg font-semibold text-foreground">
                Descrição da situação a enfrentar
              </Label>
              <p className="text-sm text-muted-foreground">
                Descreva a situação ou estímulo que está prestes a enfrentar nas sessões de exposição
              </p>
              <Textarea
                id="situacao"
                placeholder="Ex: Exposição gradual a elevadores, começando por olhar para um elevador..."
                value={situacao}
                onChange={(e) => setSituacao(e.target.value)}
                className="min-h-[100px] text-base"
              />
            </div>

            {/* Tabela de Tarefas */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold text-foreground block">
                Registo das tarefas de exposição
              </Label>
              <p className="text-sm text-muted-foreground mb-4">
                Registe a ansiedade numa escala de 0 a 10 (0 = nenhuma ansiedade, 10 = ansiedade máxima)
              </p>

              {tarefas.map((tarefa, index) => (
                <Card key={index} className="p-6 bg-muted/30">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Dia</Label>
                      <Input
                        type="date"
                        value={tarefa.dia}
                        onChange={(e) => updateTarefa(index, "dia", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2 lg:col-span-2">
                      <Label className="text-sm font-medium">Tarefa de Exposição</Label>
                      <Input
                        placeholder="Descreva a tarefa realizada..."
                        value={tarefa.tarefa}
                        onChange={(e) => updateTarefa(index, "tarefa", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Duração</Label>
                      <Input
                        placeholder="Ex: 15 minutos"
                        value={tarefa.duracao}
                        onChange={(e) => updateTarefa(index, "duracao", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Ansiedade Inicial (0-10)</Label>
                      <Input
                        type="number"
                        min="0"
                        max="10"
                        placeholder="0-10"
                        value={tarefa.ansiedadeInicial}
                        onChange={(e) => updateTarefa(index, "ansiedadeInicial", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Ansiedade Média (0-10)</Label>
                      <Input
                        type="number"
                        min="0"
                        max="10"
                        placeholder="0-10"
                        value={tarefa.ansiedadeMedia}
                        onChange={(e) => updateTarefa(index, "ansiedadeMedia", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium">Ansiedade Final (0-10)</Label>
                      <Input
                        type="number"
                        min="0"
                        max="10"
                        placeholder="0-10"
                        value={tarefa.ansiedadeFinal}
                        onChange={(e) => updateTarefa(index, "ansiedadeFinal", e.target.value)}
                      />
                    </div>
                  </div>
                </Card>
              ))}

              <Button onClick={addTarefa} variant="outline" className="w-full">
                + Adicionar nova tarefa de exposição
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            Baseado em: Clark, D. A.; Beck, A. T. Terapia cognitiva para os transtornos de ansiedade. Porto Alegre: Artmed, 2012, p. 273.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default RegistoExposicao;
