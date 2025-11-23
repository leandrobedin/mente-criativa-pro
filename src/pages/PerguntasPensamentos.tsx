import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Printer, Save, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const PerguntasPensamentos = () => {
  const { toast } = useToast();
  const [resposta1, setResposta1] = useState("");
  const [resposta2, setResposta2] = useState("");
  const [resposta3, setResposta3] = useState("");
  const [resposta4, setResposta4] = useState("");
  const [resposta5, setResposta5] = useState("");
  const [resposta6, setResposta6] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("perguntas-pensamentos");
    if (saved) {
      const data = JSON.parse(saved);
      setResposta1(data.resposta1 || "");
      setResposta2(data.resposta2 || "");
      setResposta3(data.resposta3 || "");
      setResposta4(data.resposta4 || "");
      setResposta5(data.resposta5 || "");
      setResposta6(data.resposta6 || "");
    }
  }, []);

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  const handleSave = () => {
    localStorage.setItem("perguntas-pensamentos", JSON.stringify({
      resposta1, resposta2, resposta3, resposta4, resposta5, resposta6
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-warmth/10 mb-4">
            <MessageCircle className="w-8 h-8 text-therapeutic-warmth" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">Perguntas para Reconhecer Pensamentos Automáticos</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guia estruturado para identificar e compreender pensamentos automáticos disfuncionais
          </p>
        </div>

        <Card className="p-8 mb-6 bg-card/80 backdrop-blur-sm space-y-8">
          <div className="space-y-4">
            <Label className="text-lg font-semibold block">
              1. Quais pensamentos passam pela sua mente quando se sente triste, ansioso, irritado ou frustrado?
            </Label>
            <p className="text-sm text-muted-foreground">
              Fique atento a esses estados emocionais e tente identificar os pensamentos que acompanham essas emoções.
            </p>
            <Textarea
              value={resposta1}
              onChange={(e) => setResposta1(e.target.value)}
              placeholder="Descreva os pensamentos que surgem quando experiencia emoções difíceis..."
              className="min-h-[120px]"
            />
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-semibold block">
              2. Qual é a situação específica que desencadeou os pensamentos automáticos e alterou o seu humor?
            </Label>
            <p className="text-sm text-muted-foreground mb-3">
              Com quem estava? O que estava a fazer? Quando aconteceu? Onde ocorreu?
            </p>
            <Textarea
              value={resposta2}
              onChange={(e) => setResposta2(e.target.value)}
              placeholder="Descreva a situação específica com todos os detalhes..."
              className="min-h-[120px]"
            />
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-semibold block">
              3. O que estava a passar pela sua mente instantes antes de se sentir assim?
            </Label>
            <Textarea
              value={resposta3}
              onChange={(e) => setResposta3(e.target.value)}
              placeholder="Identifique o pensamento que surgiu imediatamente antes da emoção..."
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-semibold block">
              4. Quanto acredita em cada pensamento? (0 a 100%)
            </Label>
            <Input
              type="number"
              min="0"
              max="100"
              value={resposta4}
              onChange={(e) => setResposta4(e.target.value)}
              placeholder="Percentagem de crença..."
              className="max-w-xs"
            />
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-semibold block">
              5. O que está a dizer a si mesmo sobre esta situação ou sobre si mesmo?
            </Label>
            <Textarea
              value={resposta5}
              onChange={(e) => setResposta5(e.target.value)}
              placeholder="O que o seu diálogo interno está a dizer..."
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-semibold block">
              6. O que esta situação significa para si?
            </Label>
            <Textarea
              value={resposta6}
              onChange={(e) => setResposta6(e.target.value)}
              placeholder="Qual o significado mais profundo desta situação..."
              className="min-h-[100px]"
            />
          </div>

          <Card className="bg-primary/5 p-6 border-primary/20">
            <h3 className="font-semibold text-foreground mb-2">Dica Terapêutica</h3>
            <p className="text-sm text-muted-foreground">
              Estas perguntas ajudam a identificar pensamentos automáticos que surgem rapidamente e, muitas vezes, 
              fora da consciência plena. Ao trazê-los à consciência, torna-se possível avaliá-los e modificá-los.
            </p>
          </Card>
        </Card>

        <Card className="p-6 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            Baseado em: Beck, J. S. (2022). Terapia Cognitivo-Comportamental: Teoria e Prática (3ª ed.). Porto Alegre: Artmed, p. 222
          </p>
        </Card>
      </main>
    </div>
  );
};

export default PerguntasPensamentos;
