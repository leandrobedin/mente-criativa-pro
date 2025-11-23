import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Evidencia {
  acontecimento: string;
  significado: string;
}

const FortalecerCrencas = () => {
  const { toast } = useToast();
  const [crenca, setCrencа] = useState("");
  const [evidencias, setEvidencias] = useState<Evidencia[]>([
    { acontecimento: "", significado: "" }
  ]);

  useEffect(() => {
    const saved = localStorage.getItem("fortalecer-crencas");
    if (saved) {
      const data = JSON.parse(saved);
      setCrencа(data.crenca || "");
      setEvidencias(data.evidencias || [{ acontecimento: "", significado: "" }]);
    }
  }, []);

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  const handleSave = () => {
    localStorage.setItem("fortalecer-crencas", JSON.stringify({ crenca, evidencias }));
    toast({ title: "Guardado com sucesso" });
  };

  const addEvidencia = () => {
    setEvidencias([...evidencias, { acontecimento: "", significado: "" }]);
  };

  const updateEvidencia = (index: number, campo: keyof Evidencia, valor: string) => {
    const novas = [...evidencias];
    novas[index] = { ...novas[index], [campo]: valor };
    setEvidencias(novas);
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
            <Heart className="w-8 h-8 text-therapeutic-growth" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">Quadro de Evidências para Fortalecer Crenças Positivas</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recolha evidências concretas que apoiam crenças adaptativas e positivas sobre si mesmo
          </p>
        </div>

        <Card className="p-8 mb-6 bg-card/80 backdrop-blur-sm space-y-8">
          <Card className="bg-therapeutic-growth/5 p-6 border-therapeutic-growth/20">
            <h3 className="font-semibold text-foreground mb-2">Como usar esta ferramenta</h3>
            <p className="text-sm text-muted-foreground">
              Identifique uma crença positiva sobre si mesmo que deseja fortalecer. Depois, recolha evidências 
              concretas de acontecimentos ou experiências que apoiam essa crença. Para cada evidência, reflita 
              sobre o que ela diz sobre si.
            </p>
          </Card>

          <div className="space-y-3">
            <Label className="text-lg font-semibold">Crença Positiva a Fortalecer</Label>
            <Input
              value={crenca}
              onChange={(e) => setCrencа(e.target.value)}
              placeholder="Ex: Sou uma pessoa capaz, Sou digno de amor, Sou resiliente..."
              className="text-lg"
            />
          </div>

          <div className="space-y-6">
            <Label className="text-lg font-semibold block">Evidências que Apoiam esta Crença</Label>
            {evidencias.map((evidencia, idx) => (
              <Card key={idx} className="p-6 bg-muted/30 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-therapeutic-growth/20 flex items-center justify-center">
                    <span className="font-semibold text-therapeutic-growth">{idx + 1}</span>
                  </div>
                  <Label className="font-semibold">Evidência {idx + 1}</Label>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <Label>Acontecimento / Experiência</Label>
                    <Textarea
                      value={evidencia.acontecimento}
                      onChange={(e) => updateEvidencia(idx, "acontecimento", e.target.value)}
                      placeholder="Descreva um acontecimento ou experiência específica..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div>
                    <Label>O que isto diz sobre mim?</Label>
                    <Textarea
                      value={evidencia.significado}
                      onChange={(e) => updateEvidencia(idx, "significado", e.target.value)}
                      placeholder="Reflita sobre o que esta evidência revela sobre as suas qualidades..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </Card>
            ))}
            <Button onClick={addEvidencia} variant="outline" className="w-full">+ Adicionar evidência</Button>
          </div>

          <Card className="bg-primary/5 p-6 border-primary/20">
            <h3 className="font-semibold text-foreground mb-2">Reflexão Final</h3>
            <p className="text-sm text-muted-foreground">
              À medida que recolhe evidências, observe como elas fortalecem a sua crença positiva. 
              Quanto mais evidências conseguir identificar, mais sólida e realista se tornará esta nova forma 
              de pensar sobre si mesmo. Reveja este quadro regularmente e adicione novas evidências à medida 
              que as experiencia.
            </p>
          </Card>
        </Card>

        <Card className="p-6 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            Baseado em: Beck, J. S. Terapia Cognitivo-Comportamental: Teoria e Prática (3ª ed.). Porto Alegre: Artmed, 2022, p. 303.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default FortalecerCrencas;
