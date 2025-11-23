import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const TomandoDecisoes = () => {
  const { toast } = useToast();
  const [situacao, setSituacao] = useState("");
  const [vantagensFazer, setVantagensFazer] = useState("");
  const [desvantagensFazer, setDesvantagensFazer] = useState("");
  const [vantagensNaoFazer, setVantagensNaoFazer] = useState("");
  const [desvantagensNaoFazer, setDesvantagensNaoFazer] = useState("");
  const [conclusao, setConclusao] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("tomando-decisoes");
    if (saved) {
      const data = JSON.parse(saved);
      setSituacao(data.situacao || "");
      setVantagensFazer(data.vantagensFazer || "");
      setDesvantagensFazer(data.desvantagensFazer || "");
      setVantagensNaoFazer(data.vantagensNaoFazer || "");
      setDesvantagensNaoFazer(data.desvantagensNaoFazer || "");
      setConclusao(data.conclusao || "");
    }
  }, []);

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  const handleSave = () => {
    localStorage.setItem("tomando-decisoes", JSON.stringify({
      situacao, vantagensFazer, desvantagensFazer, vantagensNaoFazer, desvantagensNaoFazer, conclusao
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-trust/10 mb-4">
            <Scale className="w-8 h-8 text-therapeutic-trust" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">Tomando Decisões</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Análise estruturada das vantagens e desvantagens para facilitar a tomada de decisões
          </p>
        </div>

        <Card className="p-8 mb-6 bg-card/80 backdrop-blur-sm space-y-8">
          <div className="space-y-3">
            <Label className="text-lg font-semibold">Situação a ser decidida</Label>
            <Textarea
              value={situacao}
              onChange={(e) => setSituacao(e.target.value)}
              placeholder="Descreva a decisão que precisa de tomar..."
              className="min-h-[100px]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-therapeutic-growth/5 border-therapeutic-growth/20 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-therapeutic-growth"></div>
                <Label className="text-lg font-semibold">Vantagens de fazer isto</Label>
              </div>
              <Textarea
                value={vantagensFazer}
                onChange={(e) => setVantagensFazer(e.target.value)}
                placeholder="Liste as vantagens..."
                className="min-h-[200px]"
              />
            </Card>

            <Card className="p-6 bg-destructive/5 border-destructive/20 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <Label className="text-lg font-semibold">Desvantagens de fazer isto</Label>
              </div>
              <Textarea
                value={desvantagensFazer}
                onChange={(e) => setDesvantagensFazer(e.target.value)}
                placeholder="Liste as desvantagens..."
                className="min-h-[200px]"
              />
            </Card>

            <Card className="p-6 bg-therapeutic-growth/5 border-therapeutic-growth/20 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-therapeutic-growth"></div>
                <Label className="text-lg font-semibold">Vantagens de NÃO fazer isto</Label>
              </div>
              <Textarea
                value={vantagensNaoFazer}
                onChange={(e) => setVantagensNaoFazer(e.target.value)}
                placeholder="Liste as vantagens..."
                className="min-h-[200px]"
              />
            </Card>

            <Card className="p-6 bg-destructive/5 border-destructive/20 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <Label className="text-lg font-semibold">Desvantagens de NÃO fazer isto</Label>
              </div>
              <Textarea
                value={desvantagensNaoFazer}
                onChange={(e) => setDesvantagensNaoFazer(e.target.value)}
                placeholder="Liste as desvantagens..."
                className="min-h-[200px]"
              />
            </Card>
          </div>

          <Card className="bg-primary/5 p-6 border-primary/20 space-y-4">
            <Label className="text-lg font-semibold">O que pesou mais: as vantagens ou as desvantagens?</Label>
            <Textarea
              value={conclusao}
              onChange={(e) => setConclusao(e.target.value)}
              placeholder="Reflita sobre a sua análise e qual caminho faz mais sentido..."
              className="min-h-[120px]"
            />
          </Card>
        </Card>

        <Card className="p-6 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            Baseado em: Beck, J. S. Terapia Cognitivo-Comportamental: Teoria e Prática (3ª ed.). Porto Alegre: Artmed, 2022, p. 324-325.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default TomandoDecisoes;
