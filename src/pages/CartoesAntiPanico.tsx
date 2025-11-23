import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, Shield, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import PrintHeader from "@/components/PrintHeader";

interface CartaoPersonalizado {
  id: string;
  texto: string;
}

const CartoesAntiPanico = () => {
  const { toast } = useToast();
  const [cartoesPersonalizados, setCartoesPersonalizados] = useState<CartaoPersonalizado[]>([]);
  const [experienciasPessoais, setExperienciasPessoais] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("cartoes-anti-panico");
    if (saved) {
      const data = JSON.parse(saved);
      setCartoesPersonalizados(data.cartoesPersonalizados || []);
      setExperienciasPessoais(data.experienciasPessoais || "");
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("cartoes-anti-panico", JSON.stringify({
      cartoesPersonalizados,
      experienciasPessoais
    }));
    toast({ title: "Guardado com sucesso" });
  };

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  const adicionarCartao = () => {
    setCartoesPersonalizados([...cartoesPersonalizados, { id: Date.now().toString(), texto: "" }]);
  };

  const removerCartao = (id: string) => {
    setCartoesPersonalizados(cartoesPersonalizados.filter(c => c.id !== id));
  };

  const atualizarCartao = (id: string, texto: string) => {
    setCartoesPersonalizados(cartoesPersonalizados.map(c => 
      c.id === id ? { ...c, texto } : c
    ));
  };

  const cartoesPredefinidos = [
    {
      categoria: "Durante o Ataque de Pânico",
      mensagens: [
        "Estas sensações não são perigosas",
        "Vou apenas deixar o meu corpo passar por isto",
        "Já sobrevivi a ataques de pânico antes e vou sobreviver a este também",
        "Nada de sério vai acontecer",
        "Este sentimento não é confortável, mas eu consigo lidar com isto"
      ]
    },
    {
      categoria: "Pensamentos São Apenas Pensamentos",
      mensagens: [
        "Pensamentos são apenas pensamentos, não são realidade",
        "Não podem impedir-me de ter sucesso no futuro",
        "As coisas não estão tão más como estou a fazer parecer",
        "Um ataque de pânico é sempre temporário",
        "Isto não é uma emergência real. Posso desacelerar e pensar no que preciso fazer"
      ]
    },
    {
      categoria: "Autocompaixão e Aceitação",
      mensagens: [
        "Não há problema em pedir ajuda",
        "Posso dar um passo de cada vez",
        "Dias difíceis não apagam o progresso que fiz",
        "A autocrítica não ajuda, apenas contribui para o problema",
        "Não vou culpar-me por me sentir assim",
        "Estendo a mesma gentileza que mostro aos meus entes queridos para mim"
      ]
    },
    {
      categoria: "Enfrentar ao Invés de Evitar",
      mensagens: [
        "Vou resistir ao impulso de me isolar. Vou falar com um amigo ou familiar",
        "Posso não ter vontade de fazer isto agora, mas sei que depois vou sentir-me melhor",
        "Resistirei aos impulsos de evitar situações que provocam ansiedade",
        "Evitar pode parecer eficaz, mas é uma estratégia de curto prazo e piora a ansiedade",
        "Posso estar ansioso e ainda assim lidar com esta situação"
      ]
    },
    {
      categoria: "Objetivos Realistas",
      mensagens: [
        "Ser perfeito não é possível",
        "Lembrarei de definir metas geríveis, caso contrário ficarei desapontado",
        "O meu melhor é bom o suficiente",
        "Posso lidar com a dúvida e aceitar a incerteza",
        "Nada precisa de ser perfeito"
      ]
    },
    {
      categoria: "Perspetiva Temporal",
      mensagens: [
        "Pode não parecer agora, mas este sentimento passará",
        "Não vai durar para sempre",
        "Vai passar",
        "Já fiz isto antes, então posso fazer de novo",
        "Como diz o provérbio: uma jornada de mil quilómetros começa com o primeiro passo"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <PrintHeader title="Cartões de Enfrentamento Anti-Pânico" />
      
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-trust/10 mb-4">
            <Shield className="w-8 h-8 text-therapeutic-trust" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Cartões de Enfrentamento Anti-Pânico
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mensagens de enfrentamento para ler durante momentos de ansiedade intensa ou ataques de pânico
          </p>
        </div>

        <Card className="p-6 mb-8 bg-therapeutic-trust/5 border-therapeutic-trust/20">
          <h3 className="font-semibold text-foreground mb-2">Como utilizar estes cartões</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Estes cartões contêm mensagens tranquilizadoras para ler quando sentir ansiedade ou pânico. 
            Pode imprimir esta página e recortar os cartões para ter sempre consigo, ou guardá-los no telemóvel.
          </p>
          <p className="text-sm text-muted-foreground">
            Durante um momento de ansiedade, leia os cartões lentamente e respire profundamente. 
            Adicione os seus próprios cartões personalizados com mensagens que façam sentido para si.
          </p>
        </Card>

        <div className="space-y-8">
          {cartoesPredefinidos.map((categoria, idx) => (
            <Card key={idx} className="p-6 bg-card/80 backdrop-blur-sm">
              <h3 className="font-semibold text-lg text-foreground mb-4 pb-3 border-b border-border/50">
                {categoria.categoria}
              </h3>
              <div className="grid gap-3 md:grid-cols-2">
                {categoria.mensagens.map((mensagem, msgIdx) => (
                  <Card key={msgIdx} className="p-4 bg-therapeutic-trust/5 border-therapeutic-trust/20">
                    <p className="text-sm text-foreground">{mensagem}</p>
                  </Card>
                ))}
              </div>
            </Card>
          ))}

          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg text-foreground">
                Os Meus Cartões Personalizados
              </h3>
              <Button onClick={adicionarCartao} size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Cartão
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Crie as suas próprias mensagens de enfrentamento que ressoam consigo
            </p>

            <div className="space-y-3">
              {cartoesPersonalizados.map((cartao) => (
                <div key={cartao.id} className="flex gap-2">
                  <Textarea
                    value={cartao.texto}
                    onChange={(e) => atualizarCartao(cartao.id, e.target.value)}
                    placeholder="Escreva a sua mensagem de enfrentamento..."
                    className="min-h-[80px]"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removerCartao(cartao.id)}
                    className="flex-shrink-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-muted/30 space-y-3">
            <Label className="text-lg font-semibold">Experiências e Reflexões</Label>
            <Textarea
              value={experienciasPessoais}
              onChange={(e) => setExperienciasPessoais(e.target.value)}
              placeholder="Quais cartões mais o ajudam? Em que situações costuma utilizá-los? Que diferenças notou ao ler estas mensagens durante momentos de ansiedade?"
              className="min-h-[120px]"
            />
          </Card>
        </div>

        <Card className="p-6 bg-muted/30 mt-8">
          <p className="text-xs text-muted-foreground text-center">
            MenteCare Pro - Baseado em estratégias de Terapia Cognitivo-Comportamental para transtornos de ansiedade
          </p>
        </Card>
      </main>
    </div>
  );
};

export default CartoesAntiPanico;
