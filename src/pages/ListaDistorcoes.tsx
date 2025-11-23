import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Printer, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ListaDistorcoes = () => {
  const { toast } = useToast();

  const distorcoes = [
    {
      nome: "Catastrofização",
      descricao: "Pensar que o pior vai acontecer, sempre imaginando o desfecho mais negativo de uma situação. É como fazer uma tempestade num copo de água e imaginar que não será capaz de suportar.",
      exemplo: '"Se eu falhar nesta apresentação, a minha carreira estará arruinada."'
    },
    {
      nome: "Leitura Mental",
      descricao: "Imaginar que já sabe o que as pessoas estão a pensar sobre si, sem evidências claras que o comprovem.",
      exemplo: '"Tenho a certeza de que estão a falar mal de mim."'
    },
    {
      nome: "Filtro Mental Negativo",
      descricao: "Escolher um único detalhe indesejável e concentrar-se exclusivamente nele. A perceção da realidade torna-se negativa a partir desse detalhe. Apenas percebe os fracassos, mas não vê os sucessos. É como admirar um belo quadro todo colorido, mas fixar-se num único detalhe: uma avaria na moldura.",
      exemplo: '"Tudo correu mal nesta viagem. Foi um completo desastre."'
    },
    {
      nome: "Raciocínio Emocional",
      descricao: "Interpretar o que está a acontecer de acordo com as emoções, baseando a visão das situações ou de si mesmo na maneira como se sente, sem evidências racionais.",
      exemplo: '"Sinto-me ansioso, então algo de mau vai acontecer."'
    },
    {
      nome: "Supergeneralização",
      descricao: "Generalizar um único evento negativo para todas as situações, ignorando as diferenças de contexto. Resulta em conclusões amplas e absolutas, usando palavras extremas como \"nunca\", \"sempre\", \"tudo\" ou \"nada\", distorcendo a realidade.",
      exemplo: '"Falhei nesta tarefa, então sou um fracasso completo."'
    },
    {
      nome: "Afirmações do Tipo \"Deveria\" e \"Tenho Que\"",
      descricao: "Julgar-se com base em expectativas rígidas sobre como as coisas deveriam ser, em vez de aceitar quem é e como as coisas são. Estabelecer regras inflexíveis para si e para os outros, ignorando as particularidades das circunstâncias.",
      exemplo: '"Deveria esforçar-me mais e evitar cometer erros; quando ocorre um erro, acabo por me considerar um fracasso."'
    },
    {
      nome: "Pensamento Dicotómico (Tudo-ou-Nada)",
      descricao: "Enxergar apenas um extremo ou outro. Algo é certo ou errado, bom ou mau, sem meio-termo ou tons de cinza. Se o desempenho não é perfeito, considera isso um fracasso.",
      exemplo: '"Se não alcançar a perfeição numa tarefa, considero isso um completo fracasso."'
    },
    {
      nome: "Rotulação",
      descricao: "Em vez de descrever o erro, atribuir automaticamente um rótulo negativo a si mesmo. Também pode fazer isso com os outros; se o comportamento de outra pessoa é indesejável, rotula-a.",
      exemplo: '"Sou um inútil."'
    },
    {
      nome: "Comparações Injustas",
      descricao: "Fazer comparações desiguais entre si e os outros, levando a sentimentos de inferioridade, inveja ou superioridade injustificada.",
      exemplo: '"Todos os meus colegas têm empregos melhores do que o meu. Eu sou um fracasso."'
    },
    {
      nome: "Personalização",
      descricao: "Assumir de forma desproporcional a responsabilidade ou culpa por algo mau que aconteceu. Ver-se como a causa de uma situação externa.",
      exemplo: '"O meu casamento terminou porque falhei."'
    },
    {
      nome: "Culpabilização",
      descricao: "Culpar os outros pelos problemas e sentimentos negativos, enquanto se recusa a assumir a responsabilidade pela própria mudança.",
      exemplo: '"Se ele não fosse tão difícil, eu não me sentiria assim."'
    },
    {
      nome: "Desqualificação do Positivo",
      descricao: "Descartar experiências positivas insistindo que \"não contam\" por alguma razão. Transformar experiências neutras ou até positivas em negativas.",
      exemplo: '"Só fui bem-sucedido porque tive sorte."'
    },
    {
      nome: "Adivinhação",
      descricao: "Antecipar que as coisas vão correr mal e sentir-se convencido de que a previsão é um facto já estabelecido.",
      exemplo: '"Sei que vou estragar tudo."'
    },
    {
      nome: "Pensamento \"E Se\"",
      descricao: "Concentrar-se excessivamente nas possibilidades de algo acontecer em vez de procurar soluções concretas.",
      exemplo: '"E se eu não conseguir? E se acontecer algo terrível?"'
    },
    {
      nome: "Incapacidade de Refutar",
      descricao: "Tender a ignorar ou rejeitar evidências ou argumentos que podem desafiar pensamentos negativos ou crenças disfuncionais.",
      exemplo: '"Não importa o que me digas, eu sei que sou um fracasso."'
    },
    {
      nome: "Foco no Julgamento",
      descricao: "Avaliar constantemente a si mesmo, aos outros e aos eventos como bons/maus, superiores/inferiores, em vez de simplesmente descrever, aceitar ou compreender.",
      exemplo: '"Ela é má pessoa\" (em vez de \"Ela fez algo que me magoou\").'
    },
    {
      nome: "Tendência à Lamentação",
      descricao: "Concentrar-se excessivamente no que poderia ter feito e nas dificuldades passadas, gerando sentimentos de tristeza e arrependimento, em vez de focar em soluções no presente.",
      exemplo: '"Se ao menos eu tivesse feito diferente no passado..."'
    }
  ];

  const handlePrint = () => {
    window.print();
    toast({
      title: "Pronto para imprimir",
      description: "A janela de impressão foi aberta",
    });
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
            <Button variant="outline" size="sm" onClick={handlePrint}>
              <Printer className="h-4 w-4 mr-2" />
              Imprimir
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-therapeutic-warmth/10 mb-4">
            <AlertTriangle className="w-8 h-8 text-therapeutic-warmth" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Lista de Distorções Cognitivas
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compreenda os erros de pensamento mais comuns que podem influenciar negativamente as emoções e comportamentos
          </p>
        </div>

        <Card className="p-8 mb-6 bg-card/80 backdrop-blur-sm">
          <div className="space-y-6">
            <Card className="bg-therapeutic-warmth/5 p-6 border-therapeutic-warmth/20">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-therapeutic-warmth" />
                O que são distorções cognitivas?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                As distorções cognitivas são padrões de pensamento enviesados que podem distorcer a realidade e gerar emoções negativas. 
                Reconhecer estas distorções é o primeiro passo para desenvolver um pensamento mais equilibrado e adaptativo.
              </p>
            </Card>

            {distorcoes.map((distorcao, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-shadow">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {index + 1}. {distorcao.nome}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {distorcao.descricao}
                </p>
                <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium text-foreground mb-1">Exemplo:</p>
                  <p className="text-sm text-muted-foreground italic">
                    {distorcao.exemplo}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            Baseado em conceitos fundamentais da Terapia Cognitivo-Comportamental
          </p>
        </Card>
      </main>
    </div>
  );
};

export default ListaDistorcoes;
