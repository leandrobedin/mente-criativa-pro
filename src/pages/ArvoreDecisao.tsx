import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ArvoreDecisao = () => {
  const { toast } = useToast();
  const [preocupacao, setPreocupacao] = useState("");
  const [temControle, setTemControle] = useState("");
  const [acoesIdentificadas, setAcoesIdentificadas] = useState("");
  const [podeAgirAgora, setPodeAgirAgora] = useState("");
  const [planoAcao, setPlanoAcao] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("arvore-decisao");
    if (saved) {
      const data = JSON.parse(saved);
      setPreocupacao(data.preocupacao || "");
      setTemControle(data.temControle || "");
      setAcoesIdentificadas(data.acoesIdentificadas || "");
      setPodeAgirAgora(data.podeAgirAgora || "");
      setPlanoAcao(data.planoAcao || "");
    }
  }, []);

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  const handleSave = () => {
    localStorage.setItem("arvore-decisao", JSON.stringify({
      preocupacao, temControle, acoesIdentificadas, podeAgirAgora, planoAcao
    }));
    toast({ title: "Guardado com sucesso" });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50 no-print">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/"><Button variant="ghost" size="sm"><ArrowLeft className="h-4 w-4 mr-2" />Voltar</Button></Link>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={handleSave}><Save className="h-4 w-4 mr-2" />Guardar</Button>
              <Button variant="outline" size="sm" onClick={handlePrint}><Printer className="h-4 w-4 mr-2" />Imprimir</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-growth/10 mb-4">
            <GitBranch className="w-8 h-8 text-therapeutic-growth" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">Árvore da Decisão</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Para lidar com as preocupações de forma produtiva e eficaz
          </p>
        </div>

        <Card className="p-8 mb-6 bg-card/80 backdrop-blur-sm space-y-8">
          <Card className="bg-therapeutic-growth/5 p-6 border-therapeutic-growth/20">
            <h3 className="font-semibold text-foreground mb-3">Compreendendo as preocupações</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Muitas pessoas enfrentam desafios significativos quando se trata de tomar decisões, e essa dificuldade 
              está frequentemente associada a preocupações excessivas. As preocupações podem ser de dois tipos:
            </p>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
              <li><strong>Preocupação produtiva:</strong> Pensamentos construtivos orientados para a solução, que ajudam 
              a considerar opções e antecipar desdobramentos</li>
              <li><strong>Preocupação improdutiva:</strong> Pensamentos incessantes e ansiosos que não levam a uma resolução 
              efetiva e podem ser paralisantes</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-3">
              A prática deste exercício ajuda a distinguir entre estes dois tipos e a desenvolver estratégias mais eficazes.
            </p>
          </Card>

          <div className="space-y-3">
            <Label className="text-lg font-semibold">Sobre o que exatamente estou preocupado?</Label>
            <Textarea
              value={preocupacao}
              onChange={(e) => setPreocupacao(e.target.value)}
              placeholder="Descreva a sua preocupação de forma específica..."
              className="min-h-[120px]"
            />
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-semibold block">Esta situação representa um desafio no qual tenho capacidade de intervir?</Label>
            <RadioGroup value={temControle} onValueChange={setTemControle}>
              <div className="flex gap-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sim" id="controle-sim" />
                  <Label htmlFor="controle-sim" className="cursor-pointer">SIM</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="nao" id="controle-nao" />
                  <Label htmlFor="controle-nao" className="cursor-pointer">NÃO</Label>
                </div>
              </div>
            </RadioGroup>

            {temControle === "sim" && (
              <Card className="p-6 bg-therapeutic-growth/5 border-therapeutic-growth/20 mt-4">
                <Label className="font-semibold mb-3 block">Identifique possíveis ações que pode tomar</Label>
                <Textarea
                  value={acoesIdentificadas}
                  onChange={(e) => setAcoesIdentificadas(e.target.value)}
                  placeholder="Liste as ações específicas que estão ao seu alcance..."
                  className="min-h-[120px]"
                />

                <div className="mt-6 space-y-4">
                  <Label className="text-base font-semibold block">Existe alguma ação que pode realizar neste momento?</Label>
                  <RadioGroup value={podeAgirAgora} onValueChange={setPodeAgirAgora}>
                    <div className="flex gap-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="agir-sim" />
                        <Label htmlFor="agir-sim" className="cursor-pointer">SIM</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id="agir-nao" />
                        <Label htmlFor="agir-nao" className="cursor-pointer">NÃO</Label>
                      </div>
                    </div>
                  </RadioGroup>

                  {podeAgirAgora === "sim" && (
                    <Card className="p-4 bg-therapeutic-calm/5 border-therapeutic-calm/20 mt-4">
                      <p className="text-sm font-semibold text-therapeutic-calm">
                        ✓ Realize essa tarefa imediatamente
                      </p>
                    </Card>
                  )}

                  {podeAgirAgora === "nao" && (
                    <div className="mt-4">
                      <Label className="font-semibold mb-3 block">Elabore um plano para as ações que pretende realizar</Label>
                      <p className="text-sm text-muted-foreground mb-3">
                        Defina os momentos em que executará cada ação
                      </p>
                      <Textarea
                        value={planoAcao}
                        onChange={(e) => setPlanoAcao(e.target.value)}
                        placeholder="Descreva o seu plano de ação (o quê, quando, como)..."
                        className="min-h-[120px]"
                      />
                      <Card className="p-4 bg-muted/30 border-muted mt-4">
                        <p className="text-sm text-muted-foreground">
                          Após planear as ações, direcione a sua atenção para algo diferente até ao momento de executar o plano.
                        </p>
                      </Card>
                    </div>
                  )}
                </div>
              </Card>
            )}

            {temControle === "nao" && (
              <Card className="p-6 bg-muted/30 border-muted mt-4">
                <p className="text-base font-semibold mb-2">→ Redirecione a sua atenção para algo diferente</p>
                <p className="text-sm text-muted-foreground">
                  Se não há ações que possa tomar neste momento, concentre-se noutras atividades. 
                  Preocupar-se com algo que não pode controlar é uma preocupação improdutiva.
                </p>
              </Card>
            )}
          </div>
        </Card>

        <Card className="p-6 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            Baseado em: BUTLER, G.; HOPE, T. Manage Your Mind. Oxford: Oxford University Press, 1995.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default ArvoreDecisao;
