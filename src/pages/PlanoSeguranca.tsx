import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Printer, Save, Shield, AlertTriangle, Heart, Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const PlanoSeguranca = () => {
  const { toast } = useToast();
  const [sinaisAlerta, setSinaisAlerta] = useState("");
  const [estrategias, setEstrategias] = useState("");
  const [razoesViver, setRazoesViver] = useState("");
  const [redeApoio, setRedeApoio] = useState("");
  const [contatoProfissional, setContatoProfissional] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("plano-seguranca");
    if (saved) {
      const data = JSON.parse(saved);
      setSinaisAlerta(data.sinaisAlerta || "");
      setEstrategias(data.estrategias || "");
      setRazoesViver(data.razoesViver || "");
      setRedeApoio(data.redeApoio || "");
      setContatoProfissional(data.contatoProfissional || "");
    }
  }, []);

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  const handleSave = () => {
    localStorage.setItem("plano-seguranca", JSON.stringify({
      sinaisAlerta, estrategias, razoesViver, redeApoio, contatoProfissional
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
            <Shield className="w-8 h-8 text-therapeutic-trust" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">Plano de Segurança</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma ferramenta para apoiar nos momentos de crise e stress emocional
          </p>
        </div>

        <Card className="p-8 mb-6 bg-card/80 backdrop-blur-sm space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-6 h-6 text-therapeutic-warmth" />
              <Label className="text-lg font-semibold">Sinais de Alerta</Label>
            </div>
            <p className="text-sm text-muted-foreground">
              Quais são os primeiros sinais que mostram que está a começar a sentir-se desestabilizado e pode precisar de usar este plano?
            </p>
            <Card className="bg-muted/30 p-4 border-muted">
              <p className="text-sm text-muted-foreground mb-2">Estes sinais podem incluir:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Pensamentos: ideias negativas, pensamentos de desesperança ou autocrítica</li>
                <li>Imagens mentais: lembranças difíceis ou cenários preocupantes</li>
                <li>Emoções e sentimentos: tristeza, ansiedade, raiva ou sensação de vazio</li>
                <li>Comportamentos: evitar pessoas, isolamento, mudanças na rotina</li>
                <li>Sensações físicas: tensão, dificuldade para respirar, batimentos acelerados</li>
              </ul>
            </Card>
            <Textarea
              value={sinaisAlerta}
              onChange={(e) => setSinaisAlerta(e.target.value)}
              placeholder="Descreva os seus sinais de alerta..."
              className="min-h-[120px]"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-3">
              <Heart className="w-6 h-6 text-therapeutic-growth" />
              <Label className="text-lg font-semibold">Estratégias de Autogestão</Label>
            </div>
            <p className="text-sm text-muted-foreground">
              O que pode fazer para se sentir mais calmo ou seguro?
            </p>
            <Card className="bg-muted/30 p-4 border-muted">
              <p className="text-sm text-muted-foreground mb-2">Pense em ações que já o ajudaram:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Ouvir música, dar uma caminhada, conversar com alguém de confiança</li>
                <li>Fazer exercícios de respiração, praticar mindfulness</li>
                <li>Atividades que proporcionem alívio e distração saudável</li>
              </ul>
            </Card>
            <Textarea
              value={estrategias}
              onChange={(e) => setEstrategias(e.target.value)}
              placeholder="Liste as suas estratégias de autogestão..."
              className="min-h-[140px]"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-3">
              <Heart className="w-6 h-6 text-therapeutic-calm" />
              <Label className="text-lg font-semibold">Razões para Viver</Label>
            </div>
            <p className="text-sm text-muted-foreground">
              O que torna a sua vida valiosa e significativa? Se não consegue encontrar razões em si mesmo, por quem vale a pena continuar?
            </p>
            <Textarea
              value={razoesViver}
              onChange={(e) => setRazoesViver(e.target.value)}
              placeholder="Descreva as suas razões para viver..."
              className="min-h-[140px]"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-therapeutic-warmth" />
              <Label className="text-lg font-semibold">Rede de Apoio</Label>
            </div>
            <p className="text-sm text-muted-foreground">
              Lista de pessoas com quem pode contar nos momentos difíceis e os seus contactos telefónicos.
            </p>
            <Textarea
              value={redeApoio}
              onChange={(e) => setRedeApoio(e.target.value)}
              placeholder="Nome e número de telefone de amigos ou familiares de confiança..."
              className="min-h-[140px]"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-3">
              <Phone className="w-6 h-6 text-therapeutic-trust" />
              <Label className="text-lg font-semibold">Contacto Profissional</Label>
            </div>
            <p className="text-sm text-muted-foreground">
              Anote o número de telefone dos profissionais com quem pode entrar em contacto em momentos de crise.
            </p>
            <Textarea
              value={contatoProfissional}
              onChange={(e) => setContatoProfissional(e.target.value)}
              placeholder="Contactos de profissionais de saúde mental..."
              className="min-h-[100px]"
            />
          </div>

          <Card className="bg-destructive/5 p-6 border-destructive/20">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <Phone className="w-5 h-5 text-destructive" />
              Serviços de Atendimento a Crises
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>SOS Voz Amiga (Lisboa):</strong> 213 544 545 | 912 802 669 | 963 524 660</li>
              <li><strong>Telefone da Amizade (Porto):</strong> 228 323 535</li>
              <li><strong>INEM (Emergência Médica):</strong> 112</li>
              <li><strong>SNS 24 (Linha Saúde):</strong> 808 24 24 24</li>
              <li>Procure o hospital mais próximo para atendimento de emergência</li>
            </ul>
          </Card>
        </Card>

        <Card className="p-6 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            Baseado em: Bryan, Craig J. Terapia cognitivo-comportamental breve para prevenção do suicídio. Porto Alegre: Artmed, 2024.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default PlanoSeguranca;
