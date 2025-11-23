import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Printer, Save, FileSignature, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import PrintHeader from "@/components/PrintHeader";

const ContratoEnfrentamento = () => {
  const { toast } = useToast();
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [compromissos, setCompromissos] = useState("");
  const [medos, setMedos] = useState("");
  const [apoio, setApoio] = useState("");
  const [assinado, setAssinado] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("contrato-enfrentamento");
    if (saved) {
      const data = JSON.parse(saved);
      setNome(data.nome || "");
      setData(data.data || "");
      setCompromissos(data.compromissos || "");
      setMedos(data.medos || "");
      setApoio(data.apoio || "");
      setAssinado(data.assinado || false);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("contrato-enfrentamento", JSON.stringify({
      nome, data, compromissos, medos, apoio, assinado
    }));
    toast({ title: "Guardado com sucesso" });
  };

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  const handleAssinar = () => {
    if (!nome || !data) {
      toast({ 
        title: "Campos obrigatórios", 
        description: "Por favor, preencha o seu nome e a data antes de assinar",
        variant: "destructive"
      });
      return;
    }
    setAssinado(true);
    toast({ title: "Contrato assinado!", description: "O seu compromisso foi registado" });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <PrintHeader title="Contrato de Enfrentamento de Medos" />
      
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

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-trust/10 mb-4">
            <FileSignature className="w-8 h-8 text-therapeutic-trust" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Contrato de Enfrentamento de Medos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Formalize o seu compromisso consigo mesmo para enfrentar os seus medos com confiança, coragem e determinação
          </p>
        </div>

        <Card className="p-6 mb-8 bg-therapeutic-trust/5 border-therapeutic-trust/20">
          <h3 className="font-semibold text-foreground mb-2">O Poder do Compromisso</h3>
          <p className="text-sm text-muted-foreground">
            Assinar um contrato consigo mesmo é um ato simbólico mas poderoso. Representa a sua intenção consciente 
            de enfrentar os seus medos e a sua confiança na sua capacidade de crescer. Este compromisso pode ser 
            revisitado sempre que precisar de motivação.
          </p>
        </Card>

        <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-primary/20 space-y-8">
          <div className="text-center border-b border-border/50 pb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">CONTRATO DE COMPROMISSO</h2>
            <p className="text-sm text-muted-foreground">
              Contrato pessoal de enfrentamento de medos e desenvolvimento pessoal
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
              <p className="text-lg text-center font-medium text-foreground mb-4">
                Eu, <span className="border-b-2 border-primary/30 px-2">{nome || "____________________"}</span>, 
                assumo o compromisso de iniciar a minha jornada de enfrentamento de medos.
              </p>
            </div>

            <div className="space-y-4">
              <Label className="text-lg font-semibold">Declaro que tenho:</Label>
              <div className="space-y-3 ml-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-therapeutic-growth mt-0.5 flex-shrink-0" />
                  <p className="text-foreground"><strong>CONFIANÇA</strong> na minha capacidade de crescer e superar desafios</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-therapeutic-growth mt-0.5 flex-shrink-0" />
                  <p className="text-foreground"><strong>CORAGEM</strong> para enfrentar o desconforto e seguir em frente mesmo com medo</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-therapeutic-growth mt-0.5 flex-shrink-0" />
                  <p className="text-foreground"><strong>COMPROMISSO</strong> para começar pelos medos mais fáceis hoje e progredir gradualmente</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Label>Medos que me comprometo a enfrentar:</Label>
              <Textarea
                value={medos}
                onChange={(e) => setMedos(e.target.value)}
                placeholder="Liste os medos que deseja enfrentar, começando pelos mais fáceis..."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-3">
              <Label>Os meus compromissos específicos:</Label>
              <Textarea
                value={compromissos}
                onChange={(e) => setCompromissos(e.target.value)}
                placeholder="Ex: Vou praticar o primeiro passo do meu plano 3 vezes esta semana, vou usar técnicas de relaxamento quando sentir ansiedade..."
                className="min-h-[120px]"
              />
            </div>

            <div className="space-y-3">
              <Label>Pessoas/recursos de apoio:</Label>
              <Textarea
                value={apoio}
                onChange={(e) => setApoio(e.target.value)}
                placeholder="Quem pode apoiá-lo nesta jornada? Que recursos vai utilizar?"
                className="min-h-[80px]"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <Label>Nome Completo</Label>
                <Input
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="O seu nome"
                />
              </div>
              <div className="space-y-2">
                <Label>Data</Label>
                <Input
                  type="date"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
              </div>
            </div>

            {assinado ? (
              <Card className="p-6 bg-therapeutic-growth/10 border-therapeutic-growth/30">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <CheckCircle2 className="w-8 h-8 text-therapeutic-growth" />
                  <p className="text-lg font-semibold text-therapeutic-growth">Contrato Assinado!</p>
                </div>
                <p className="text-sm text-center text-muted-foreground">
                  O seu compromisso foi registado em {new Date(data).toLocaleDateString('pt-PT')}
                </p>
                <div className="mt-4 pt-4 border-t border-border text-center">
                  <p className="font-semibold text-foreground text-lg">{nome}</p>
                  <p className="text-xs text-muted-foreground mt-1">Assinatura</p>
                </div>
              </Card>
            ) : (
              <Button 
                onClick={handleAssinar} 
                className="w-full py-6 text-lg"
                size="lg"
              >
                <FileSignature className="w-5 h-5 mr-2" />
                Assinar Contrato
              </Button>
            )}
          </div>

          <div className="bg-muted/30 p-4 rounded-lg border border-border/50 text-center">
            <p className="text-xs text-muted-foreground italic">
              "Uma jornada de mil quilómetros começa com um único passo"
            </p>
          </div>
        </Card>

        <Card className="p-6 bg-primary/5 border-primary/20 mt-6">
          <h3 className="font-semibold text-foreground mb-2">Lembre-se</h3>
          <p className="text-sm text-muted-foreground">
            Este contrato não é uma obrigação rígida, mas sim uma declaração de intenção e um lembrete do seu 
            compromisso consigo mesmo. Pode revisitá-lo sempre que precisar de motivação ou ajustá-lo conforme 
            a sua jornada evolui.
          </p>
        </Card>

        <Card className="p-6 bg-muted/30 mt-6">
          <p className="text-xs text-muted-foreground text-center">
            MenteCare Pro - Ferramenta baseada em princípios de Terapia Cognitivo-Comportamental
          </p>
        </Card>
      </main>
    </div>
  );
};

export default ContratoEnfrentamento;
