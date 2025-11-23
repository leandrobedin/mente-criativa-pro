import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ExaminandoEvidencias = () => {
  const { toast } = useToast();
  const [pensamento, setPensamento] = useState("");
  const [evidenciasAFavor, setEvidenciasAFavor] = useState<string[]>(["", "", "", ""]);
  const [evidenciasContra, setEvidenciasContra] = useState<string[]>(["", "", "", ""]);
  const [conclusao, setConclusao] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("examinando-evidencias");
    if (saved) {
      const data = JSON.parse(saved);
      setPensamento(data.pensamento || "");
      setEvidenciasAFavor(data.evidenciasAFavor || ["", "", "", ""]);
      setEvidenciasContra(data.evidenciasContra || ["", "", "", ""]);
      setConclusao(data.conclusao || "");
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
    localStorage.setItem("examinando-evidencias", JSON.stringify({ 
      pensamento, 
      evidenciasAFavor, 
      evidenciasContra, 
      conclusao 
    }));
    toast({
      title: "Guardado com sucesso",
      description: "O exercício foi guardado localmente",
    });
  };

  const addEvidenciaAFavor = () => {
    setEvidenciasAFavor([...evidenciasAFavor, ""]);
  };

  const addEvidenciaContra = () => {
    setEvidenciasContra([...evidenciasContra, ""]);
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

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-calm/10 mb-4">
            <Scale className="w-8 h-8 text-therapeutic-calm" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Examinando Evidências
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Avalie objetivamente os seus pensamentos através de uma análise equilibrada das evidências a favor e contra
          </p>
        </div>

        <Card className="p-8 mb-6 bg-card/80 backdrop-blur-sm">
          <div className="space-y-8">
            {/* Pensamento Disfuncional */}
            <div className="space-y-3">
              <Label htmlFor="pensamento" className="text-lg font-semibold text-foreground">
                Pensamento disfuncional a ser examinado
              </Label>
              <p className="text-sm text-muted-foreground">
                Descreva o pensamento que gostaria de questionar e avaliar de forma mais objetiva
              </p>
              <Textarea
                id="pensamento"
                placeholder="Ex: Vou falhar nesta apresentação e todos vão pensar que sou incompetente..."
                value={pensamento}
                onChange={(e) => setPensamento(e.target.value)}
                className="min-h-[100px] text-base"
              />
            </div>

            {/* Instruções */}
            <Card className="bg-muted/50 p-6 border-primary/20">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Scale className="w-5 h-5 text-primary" />
                Como proceder
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Faça um levantamento de todas as evidências que apoiam o seu pensamento e também as evidências que o contestam. 
                Quando terminar, volte a cada lista e marque as evidências mais relevantes. Este processo ajudará a chegar a uma conclusão mais equilibrada e realista.
              </p>
            </Card>

            {/* Evidências */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Evidências A Favor */}
              <div className="space-y-4">
                <div>
                  <Label className="text-lg font-semibold text-foreground mb-2 block">
                    Evidências a Favor
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Que factos ou experiências apoiam este pensamento?
                  </p>
                </div>
                <div className="space-y-3">
                  {evidenciasAFavor.map((evidencia, index) => (
                    <Textarea
                      key={index}
                      placeholder={`Evidência ${index + 1}...`}
                      value={evidencia}
                      onChange={(e) => {
                        const novas = [...evidenciasAFavor];
                        novas[index] = e.target.value;
                        setEvidenciasAFavor(novas);
                      }}
                      className="min-h-[80px]"
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={addEvidenciaAFavor}
                  className="w-full"
                >
                  + Adicionar evidência
                </Button>
              </div>

              {/* Evidências Contra */}
              <div className="space-y-4">
                <div>
                  <Label className="text-lg font-semibold text-foreground mb-2 block">
                    Evidências Contra
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Que factos ou experiências contradizem este pensamento?
                  </p>
                </div>
                <div className="space-y-3">
                  {evidenciasContra.map((evidencia, index) => (
                    <Textarea
                      key={index}
                      placeholder={`Evidência ${index + 1}...`}
                      value={evidencia}
                      onChange={(e) => {
                        const novas = [...evidenciasContra];
                        novas[index] = e.target.value;
                        setEvidenciasContra(novas);
                      }}
                      className="min-h-[80px]"
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={addEvidenciaContra}
                  className="w-full"
                >
                  + Adicionar evidência
                </Button>
              </div>
            </div>

            {/* Conclusão */}
            <div className="space-y-3 pt-4 border-t border-border">
              <Label htmlFor="conclusao" className="text-lg font-semibold text-foreground">
                Conclusão
              </Label>
              <p className="text-sm text-muted-foreground">
                Após esta avaliação, como poderia formular um pensamento mais realista e adaptativo?
              </p>
              <Textarea
                id="conclusao"
                placeholder="Considerando todas as evidências apresentadas, um pensamento mais equilibrado seria..."
                value={conclusao}
                onChange={(e) => setConclusao(e.target.value)}
                className="min-h-[120px] text-base"
              />
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            Baseado em: Leahy, R. L. (2019). Técnicas de Terapia Cognitiva: Manual do Terapeuta (2ª ed.). Porto Alegre: Artmed. p.85.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default ExaminandoEvidencias;
