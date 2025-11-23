import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Printer, Save, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import PrintHeader from "@/components/PrintHeader";

interface DesafioItem {
  id: string;
  texto: string;
  concluido: boolean;
  notas: string;
}

const DesafioIncerteza = () => {
  const { toast } = useToast();
  const [desafios, setDesafios] = useState<DesafioItem[]>([]);
  const [reflexaoGeral, setReflexaoGeral] = useState("");

  const desafiosPredefinidos = [
    "Experimentar fazer um novo trajeto para ir ao trabalho, mesmo sem saber como está o trânsito",
    "Experimentar pedir algo novo do cardápio num restaurante",
    "Experimentar uma nova aula (desporto, dança, idioma)",
    "Procurar um restaurante novo sem olhar as avaliações e experimentar algo diferente do cardápio",
    "Visitar um lugar onde nunca esteve antes, como um supermercado ou uma loja",
    "Assistir a um filme no cinema sem ler as críticas prévias",
    "Experimentar ler uma obra de um autor desconhecido",
    "Iniciar uma conversa com alguém que não conhece, fazendo uma pergunta ou oferecendo um elogio",
    "Experimentar usar algo novo, como uma marca ou cor diferente",
    "Desafiar-se a tomar uma decisão rápida e pequena sem fazer extensas pesquisas",
    "Expandir o repertório musical ouvindo músicas que normalmente não ouviria",
    "Sentar-se num lugar diferente do local que normalmente escolhe",
    "Delegar tarefas a outras pessoas (filhos, familiar ou no trabalho)",
    "Experimentar partilhar uma vulnerabilidade sua com pessoas que o conhecem",
    "Ao ligar ou enviar mensagem a um ente querido, resistir à necessidade de perguntar onde ele está"
  ];

  useEffect(() => {
    const saved = localStorage.getItem("desafio-incerteza");
    if (saved) {
      const data = JSON.parse(saved);
      setDesafios(data.desafios || inicializarDesafios());
      setReflexaoGeral(data.reflexaoGeral || "");
    } else {
      setDesafios(inicializarDesafios());
    }
  }, []);

  const inicializarDesafios = (): DesafioItem[] => {
    return desafiosPredefinidos.map((texto, idx) => ({
      id: `desafio-${idx}`,
      texto,
      concluido: false,
      notas: ""
    }));
  };

  const handleSave = () => {
    localStorage.setItem("desafio-incerteza", JSON.stringify({ desafios, reflexaoGeral }));
    toast({ title: "Guardado com sucesso" });
  };

  const handlePrint = () => {
    window.print();
    toast({ title: "Pronto para imprimir" });
  };

  const toggleDesafio = (id: string) => {
    setDesafios(desafios.map(d => 
      d.id === id ? { ...d, concluido: !d.concluido } : d
    ));
  };

  const updateNotas = (id: string, notas: string) => {
    setDesafios(desafios.map(d => 
      d.id === id ? { ...d, notas } : d
    ));
  };

  const desafiosConcluidos = desafios.filter(d => d.concluido).length;
  const percentagem = Math.round((desafiosConcluidos / desafios.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <PrintHeader title="Desafio: Abraçando a Incerteza" />
      
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Desafio: Abraçando a Incerteza
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desafios diários para treinar a sua tolerância à incerteza e reduzir a ansiedade
          </p>
        </div>

        <Card className="p-6 mb-8 bg-primary/5 border-primary/20">
          <h3 className="font-semibold text-foreground mb-3">Compreender a Relação entre Ansiedade e Incerteza</h3>
          <p className="text-sm text-muted-foreground mb-3">
            A ansiedade e a dificuldade em lidar com a incerteza caminham de mãos dadas. A ansiedade surge 
            frequentemente da antecipação do desconhecido. Pessoas com níveis elevados de ansiedade tendem a buscar 
            segurança e controlo, e a incerteza representa uma ameaça a essas necessidades.
          </p>
          <p className="text-sm text-muted-foreground">
            A intolerância à incerteza manifesta-se em comportamentos como preocupação excessiva, planeamento 
            meticuloso e busca constante por segurança. Embora estas estratégias aliviem temporariamente a ansiedade, 
            reforçam a crença de que a incerteza é inaceitável. A vida é inerentemente incerta, e tentar eliminar 
            totalmente essa incerteza é uma tarefa impossível.
          </p>
        </Card>

        <Card className="p-6 mb-8 bg-therapeutic-calm/5 border-therapeutic-calm/20">
          <h3 className="font-semibold text-foreground mb-3">Progresso dos Desafios</h3>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="h-4 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-therapeutic-growth to-primary transition-all duration-500"
                  style={{ width: `${percentagem}%` }}
                />
              </div>
            </div>
            <div className="text-center min-w-[100px]">
              <p className="text-2xl font-bold text-foreground">{desafiosConcluidos}/{desafios.length}</p>
              <p className="text-xs text-muted-foreground">Concluídos</p>
            </div>
          </div>
        </Card>

        <div className="grid gap-4 mb-8">
          <Card className="p-6 bg-therapeutic-trust/5 border-therapeutic-trust/20">
            <h3 className="font-semibold text-foreground mb-3">Lembretes Importantes</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium text-sm text-foreground mb-1">Abra-se para a mudança</p>
                <p className="text-xs text-muted-foreground">A vida é dinâmica. Estar aberto a novas possibilidades torna as incertezas mais geríveis.</p>
              </div>
              <div>
                <p className="font-medium text-sm text-foreground mb-1">Foque no que pode controlar</p>
                <p className="text-xs text-muted-foreground">Concentre a sua atenção naquilo que está ao seu alcance para cultivar um senso de capacidade.</p>
              </div>
              <div>
                <p className="font-medium text-sm text-foreground mb-1">Aprenda com a incerteza</p>
                <p className="text-xs text-muted-foreground">Veja situações incertas como oportunidades de aprendizado e crescimento pessoal.</p>
              </div>
              <div>
                <p className="font-medium text-sm text-foreground mb-1">Cultive a resiliência</p>
                <p className="text-xs text-muted-foreground">Superar desafios faz parte da jornada. Fortalecer a resiliência ajuda a adaptar-se melhor.</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">Desafios Diários</h3>
          {desafios.map((desafio) => (
            <Card key={desafio.id} className={`p-5 transition-all ${desafio.concluido ? 'bg-therapeutic-growth/5 border-therapeutic-growth/20' : 'bg-card/80'}`}>
              <div className="flex items-start gap-4">
                <Checkbox
                  checked={desafio.concluido}
                  onCheckedChange={() => toggleDesafio(desafio.id)}
                  className="mt-1"
                />
                <div className="flex-1 space-y-3">
                  <p className={`text-sm ${desafio.concluido ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                    {desafio.texto}
                  </p>
                  {desafio.concluido && (
                    <div className="space-y-2">
                      <Label className="text-xs font-medium">Como foi a experiência?</Label>
                      <Textarea
                        value={desafio.notas}
                        onChange={(e) => updateNotas(desafio.id, e.target.value)}
                        placeholder="Partilhe como se sentiu, o que aprendeu..."
                        className="min-h-[60px] text-sm"
                      />
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-primary/5 border-primary/20 mt-8 space-y-3">
          <Label className="text-lg font-semibold">Reflexão Geral sobre o Desafio</Label>
          <p className="text-sm text-muted-foreground">
            Como tem sido a experiência de abraçar a incerteza? Que mudanças notou na sua ansiedade? 
            O que aprendeu sobre si mesmo?
          </p>
          <Textarea
            value={reflexaoGeral}
            onChange={(e) => setReflexaoGeral(e.target.value)}
            placeholder="Partilhe as suas reflexões e aprendizagens..."
            className="min-h-[120px]"
          />
        </Card>

        <Card className="p-6 bg-muted/30 mt-6">
          <p className="text-xs text-muted-foreground text-center">
            MenteCare Pro - Baseado em princípios de Terapia Cognitivo-Comportamental para manejo da ansiedade
          </p>
        </Card>
      </main>
    </div>
  );
};

export default DesafioIncerteza;
