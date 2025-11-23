import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const SetaDescendente = () => {
  const { toast } = useToast();
  const [situacao, setSituacao] = useState("");
  const [pensamentoInicial, setPensamentoInicial] = useState("");
  const [respostas, setRespostas] = useState<string[]>(Array(7).fill(""));

  useEffect(() => {
    const saved = localStorage.getItem("seta-descendente");
    if (saved) {
      const data = JSON.parse(saved);
      setSituacao(data.situacao || "");
      setPensamentoInicial(data.pensamentoInicial || "");
      setRespostas(data.respostas || Array(7).fill(""));
    }
  }, []);

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  const handleSave = () => {
    localStorage.setItem("seta-descendente", JSON.stringify({ situacao, pensamentoInicial, respostas }));
    toast({ title: "Guardado com sucesso" });
  };

  const updateResposta = (index: number, valor: string) => {
    const novas = [...respostas];
    novas[index] = valor;
    setRespostas(novas);
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

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-trust/10 mb-4">
            <ArrowDown className="w-8 h-8 text-therapeutic-trust" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">A Técnica da "Seta Descendente"</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Identifique crenças nucleares sobre si mesmo através de questionamento progressivo
          </p>
        </div>

        <Card className="p-8 mb-6 bg-card/80 backdrop-blur-sm">
          <div className="space-y-8">
            <Card className="bg-therapeutic-trust/5 p-6 border-therapeutic-trust/20">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <ArrowDown className="w-5 h-5 text-therapeutic-trust" />
                Como funciona esta técnica
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                A técnica da "seta descendente" visa identificar crenças nucleares sobre si mesmo. O processo envolve seguir uma linha de raciocínio descendente, 
                começando com um evento que desencadeou uma emoção intensa e questionando repetidamente: "Se esse pensamento for verdade, o que isso significa sobre mim?"
              </p>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Identifique uma situação que desencadeou uma emoção intensa</li>
                <li>Identifique o pensamento automático disfuncional</li>
                <li>Pergunte: "O que isso significa sobre mim?"</li>
                <li>Continue perguntando até chegar a uma crença nuclear absoluta</li>
              </ol>
            </Card>

            <div className="space-y-3">
              <Label className="text-lg font-semibold">Situação (que tenha desencadeado uma emoção intensa)</Label>
              <Textarea value={situacao} onChange={(e) => setSituacao(e.target.value)} 
                placeholder="Descreva a situação..." className="min-h-[100px]" />
            </div>

            <div className="space-y-3">
              <Label className="text-lg font-semibold">Pensamento inicial</Label>
              <p className="text-sm text-muted-foreground">O que isso revela ou significa sobre mim?</p>
              <Textarea value={pensamentoInicial} onChange={(e) => setPensamentoInicial(e.target.value)} 
                placeholder="O meu pensamento inicial..." className="min-h-[80px]" />
            </div>

            <div className="space-y-6 pt-4">
              {respostas.map((resposta, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-therapeutic-trust/20 flex items-center justify-center">
                      <ArrowDown className="w-4 h-4 text-therapeutic-trust" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <Label className="text-base font-semibold">
                        Se esse pensamento for verdade, o que isso significa sobre mim?
                      </Label>
                      <Textarea
                        value={resposta}
                        onChange={(e) => updateResposta(index, e.target.value)}
                        placeholder="A minha resposta..."
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Card className="bg-primary/5 p-6 border-primary/20 mt-6">
              <h3 className="font-semibold text-foreground mb-2">Crença Nuclear Identificada</h3>
              <p className="text-sm text-muted-foreground">
                A última resposta geralmente revela uma crença nuclear - uma afirmação absoluta sobre si mesmo que influencia profundamente 
                os seus pensamentos e emoções.
              </p>
            </Card>
          </div>
        </Card>

        <Card className="p-6 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            Baseado em: Greenberger, D.; Padesky, C. A. A Mente Vencendo o Humor (2ª ed.). Porto Alegre: Artmed, 2017. p. 155.
            <br />Beck, J. S. Terapia Cognitivo-Comportamental (3ª ed.). Porto Alegre: Artmed, 2022, p. 289.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default SetaDescendente;
