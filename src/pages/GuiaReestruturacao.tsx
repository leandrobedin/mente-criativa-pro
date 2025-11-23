import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Printer, Save, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const GuiaReestruturacao = () => {
  const { toast } = useToast();
  const [registos, setRegistos] = useState([{
    pensamento: "",
    influenciaEmocoes: "",
    influenciaComportamento: "",
    evidenciasContra: "",
    conselhoAmigo: "",
    pensamentoAdaptativo: "",
    acaoUtil: ""
  }]);

  useEffect(() => {
    const saved = localStorage.getItem("guia-reestruturacao");
    if (saved) {
      setRegistos(JSON.parse(saved));
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
    localStorage.setItem("guia-reestruturacao", JSON.stringify(registos));
    toast({
      title: "Guardado com sucesso",
      description: "O exercício foi guardado localmente",
    });
  };

  const addRegistro = () => {
    setRegistos([...registos, {
      pensamento: "",
      influenciaEmocoes: "",
      influenciaComportamento: "",
      evidenciasContra: "",
      conselhoAmigo: "",
      pensamentoAdaptativo: "",
      acaoUtil: ""
    }]);
  };

  const updateRegistro = (index: number, campo: string, valor: string) => {
    const novos = [...registos];
    novos[index] = { ...novos[index], [campo]: valor };
    setRegistos(novos);
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Zap className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Guia Rápido para Avaliação e Reestruturação de Pensamentos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ferramenta prática para questionar e reformular pensamentos disfuncionais de forma estruturada
          </p>
        </div>

        <Card className="p-8 mb-6 bg-card/80 backdrop-blur-sm">
          <div className="space-y-8">
            <Card className="bg-primary/5 p-6 border-primary/20">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Como utilizar este guia
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Este guia oferece uma sequência de perguntas para avaliar rapidamente um pensamento e desenvolver alternativas mais equilibradas. 
                Responda a cada questão de forma honesta e reflexiva.
              </p>
            </Card>

            {registos.map((registo, index) => (
              <Card key={index} className="p-6 space-y-6 bg-muted/30">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Registo {index + 1}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-foreground">
                      1. Qual pensamento está a incomodá-lo?
                    </Label>
                    <Textarea
                      placeholder="Descreva o pensamento que o perturba..."
                      value={registo.pensamento}
                      onChange={(e) => updateRegistro(index, "pensamento", e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-foreground">
                      2. Qual é a influência deste pensamento sobre as suas emoções?
                    </Label>
                    <Textarea
                      placeholder="Como este pensamento o faz sentir?..."
                      value={registo.influenciaEmocoes}
                      onChange={(e) => updateRegistro(index, "influenciaEmocoes", e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-foreground">
                      3. Como este pensamento influencia o seu comportamento?
                    </Label>
                    <Textarea
                      placeholder="O que faz ou deixa de fazer por causa deste pensamento?..."
                      value={registo.influenciaComportamento}
                      onChange={(e) => updateRegistro(index, "influenciaComportamento", e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-foreground">
                      4. Que evidências existem que contestam a veracidade deste pensamento?
                    </Label>
                    <Textarea
                      placeholder="Que factos contradizem este pensamento?..."
                      value={registo.evidenciasContra}
                      onChange={(e) => updateRegistro(index, "evidenciasContra", e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-foreground">
                      5. Se o seu melhor amigo estivesse nesta situação, o que lhe diria?
                    </Label>
                    <Textarea
                      placeholder="Que conselho daria ao seu melhor amigo?..."
                      value={registo.conselhoAmigo}
                      onChange={(e) => updateRegistro(index, "conselhoAmigo", e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-foreground">
                      6. Qual pensamento mais adaptativo poderia substituir o atual?
                    </Label>
                    <Textarea
                      placeholder="Reformule o pensamento de forma mais equilibrada..."
                      value={registo.pensamentoAdaptativo}
                      onChange={(e) => updateRegistro(index, "pensamentoAdaptativo", e.target.value)}
                      className="min-h-[80px]"
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-border">
                  <Label className="text-sm font-semibold text-foreground">
                    7. Qual seria a ação mais útil e apropriada a tomar agora?
                  </Label>
                  <Textarea
                    placeholder="Que comportamento concreto pode adotar?..."
                    value={registo.acaoUtil}
                    onChange={(e) => updateRegistro(index, "acaoUtil", e.target.value)}
                    className="min-h-[80px]"
                  />
                </div>
              </Card>
            ))}

            <Button onClick={addRegistro} className="w-full" variant="outline">
              + Adicionar novo registo
            </Button>
          </div>
        </Card>

        <Card className="p-6 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            Ferramenta adaptada dos princípios da Terapia Cognitivo-Comportamental
          </p>
        </Card>
      </main>
    </div>
  );
};

export default GuiaReestruturacao;
