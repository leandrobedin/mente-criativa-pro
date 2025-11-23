import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Registro {
  data: string;
  hora: string;
  situacao: string;
  pensamento: string;
  emocao: string;
  intensidade: string;
  crenca: string;
  distorcao: string;
  pensamentoAlternativo: string;
  resultado: string;
}

const RegistoPensamento = () => {
  const { toast } = useToast();
  const [registos, setRegistos] = useState<Registro[]>([{
    data: "", hora: "", situacao: "", pensamento: "", emocao: "",
    intensidade: "", crenca: "", distorcao: "", pensamentoAlternativo: "", resultado: ""
  }]);

  useEffect(() => {
    const saved = localStorage.getItem("registo-pensamento");
    if (saved) {
      setRegistos(JSON.parse(saved));
    }
  }, []);

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir", description: "A janela de impressão foi aberta" });
  };

  const handleSave = () => {
    localStorage.setItem("registo-pensamento", JSON.stringify(registos));
    toast({ title: "Guardado com sucesso", description: "Os registos foram guardados" });
  };

  const addRegistro = () => {
    setRegistos([...registos, {
      data: "", hora: "", situacao: "", pensamento: "", emocao: "",
      intensidade: "", crenca: "", distorcao: "", pensamentoAlternativo: "", resultado: ""
    }]);
  };

  const updateRegistro = (index: number, campo: keyof Registro, valor: string) => {
    const novos = [...registos];
    novos[index] = { ...novos[index], [campo]: valor };
    setRegistos(novos);
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

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">Registo de Pensamento Disfuncional</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ferramenta estruturada para identificar, questionar e reformular pensamentos disfuncionais
          </p>
        </div>

        <Card className="p-8 mb-6 bg-card/80 backdrop-blur-sm">
          <div className="space-y-6">
            {registos.map((reg, idx) => (
              <Card key={idx} className="p-6 bg-muted/30 space-y-4">
                <h3 className="text-lg font-semibold">Registo {idx + 1}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div><Label>Data</Label><Input type="date" value={reg.data} onChange={(e) => updateRegistro(idx, "data", e.target.value)} /></div>
                  <div><Label>Hora</Label><Input type="time" value={reg.hora} onChange={(e) => updateRegistro(idx, "hora", e.target.value)} /></div>
                  <div><Label>Situação</Label><Textarea value={reg.situacao} onChange={(e) => updateRegistro(idx, "situacao", e.target.value)} placeholder="Onde estava? Com quem?" className="min-h-[60px]" /></div>
                </div>
                <div><Label>Pensamento Automático</Label><Textarea value={reg.pensamento} onChange={(e) => updateRegistro(idx, "pensamento", e.target.value)} placeholder="O que passou pela sua mente?" className="min-h-[80px]" /></div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div><Label>Emoção</Label><Input value={reg.emocao} onChange={(e) => updateRegistro(idx, "emocao", e.target.value)} placeholder="Ex: Ansiedade, tristeza..." /></div>
                  <div><Label>Intensidade (0-100)</Label><Input type="number" min="0" max="100" value={reg.intensidade} onChange={(e) => updateRegistro(idx, "intensidade", e.target.value)} /></div>
                </div>
                <div><Label>Crença no Pensamento (0-100%)</Label><Input type="number" min="0" max="100" value={reg.crenca} onChange={(e) => updateRegistro(idx, "crenca", e.target.value)} /></div>
                <div><Label>Distorção Cognitiva</Label><Textarea value={reg.distorcao} onChange={(e) => updateRegistro(idx, "distorcao", e.target.value)} placeholder="Identifique a distorção..." className="min-h-[60px]" /></div>
                <div><Label>Pensamento Alternativo</Label><Textarea value={reg.pensamentoAlternativo} onChange={(e) => updateRegistro(idx, "pensamentoAlternativo", e.target.value)} placeholder="Reformule o pensamento..." className="min-h-[80px]" /></div>
                <div><Label>Resultado</Label><Textarea value={reg.resultado} onChange={(e) => updateRegistro(idx, "resultado", e.target.value)} placeholder="Como se sente agora?" className="min-h-[60px]" /></div>
              </Card>
            ))}
            <Button onClick={addRegistro} variant="outline" className="w-full">+ Adicionar registo</Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default RegistoPensamento;
