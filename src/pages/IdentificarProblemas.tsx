import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Printer, Save, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const IdentificarProblemas = () => {
  const { toast } = useToast();
  const [respostas, setRespostas] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const saved = localStorage.getItem("identificar-problemas");
    if (saved) {
      setRespostas(JSON.parse(saved));
    }
  }, []);

  const perguntas = [
    {
      id: "situacoes",
      texto: "Quais são as situações recorrentes que causam desconforto ou insatisfação na sua vida?",
      placeholder: "Descreva situações que se repetem e que o/a incomodam..."
    },
    {
      id: "relacionamentos",
      texto: "Tem notado mudanças nos seus relacionamentos interpessoais que gostaria de melhorar?",
      placeholder: "Pense nas suas relações familiares, amorosas, de amizade ou profissionais..."
    },
    {
      id: "emocoes",
      texto: "Quais emoções frequentes ou intensas experimenta e gostaria de compreender melhor?",
      placeholder: "Ansiedade, tristeza, raiva, frustração..."
    },
    {
      id: "comportamentos",
      texto: "Existe algum comportamento específico que considera problemático e deseja modificar?",
      placeholder: "Comportamentos que gostaria de mudar ou eliminar..."
    },
    {
      id: "estresse",
      texto: "Como lida com o stress diário e as pressões da vida? Existem estratégias que gostaria de aprimorar?",
      placeholder: "Descreva como costuma reagir ao stress..."
    },
    {
      id: "areas",
      texto: "Quais áreas da sua vida acredita que precisam de atenção para melhoria?",
      placeholder: "Trabalho, família, saúde, lazer, desenvolvimento pessoal..."
    },
    {
      id: "preocupacoes",
      texto: "Quais são as suas maiores fontes de preocupação e ansiedade no momento?",
      placeholder: "O que mais o/a preocupa atualmente..."
    },
    {
      id: "explorar",
      texto: "Existe algo na sua vida que gostaria de explorar mais profundamente para obter maior clareza ou compreensão?",
      placeholder: "Temas ou questões que gostaria de entender melhor..."
    },
    {
      id: "autocritica",
      texto: "Já identificou algum pensamento negativo ou autocrítico que afeta a sua autoestima?",
      placeholder: "Pensamentos sobre si mesmo que o/a fazem sentir mal..."
    },
    {
      id: "decisoes",
      texto: "Enfrenta desafios específicos na tomada de decisões ou na resolução de problemas?",
      placeholder: "Situações em que tem dificuldade em decidir ou resolver..."
    },
    {
      id: "autoconfianca",
      texto: "Sente que há áreas da sua vida em que gostaria de ter mais autoconfiança?",
      placeholder: "Situações onde gostaria de se sentir mais confiante..."
    },
    {
      id: "valores",
      texto: "Como se vê em relação aos seus valores e aspirações pessoais?",
      placeholder: "Está a viver de acordo com aquilo que é importante para si?..."
    }
  ];

  const handleChange = (id: string, valor: string) => {
    setRespostas({ ...respostas, [id]: valor });
  };

  const handlePrint = () => {
    window.print();
    toast({
      title: "Pronto para imprimir",
      description: "A janela de impressão foi aberta",
    });
  };

  const handleSave = () => {
    localStorage.setItem("identificar-problemas", JSON.stringify(respostas));
    toast({
      title: "Guardado com sucesso",
      description: "As respostas foram guardadas localmente",
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
            <ClipboardList className="w-8 h-8 text-therapeutic-trust" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Perguntas para Identificar os seus Problemas
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estas perguntas auxiliam na identificação dos principais desafios que enfrenta, proporcionando clareza para definir objetivos terapêuticos específicos
          </p>
        </div>

        <Card className="p-8 mb-6 bg-card/80 backdrop-blur-sm">
          <div className="space-y-8">
            <Card className="bg-therapeutic-trust/5 p-6 border-therapeutic-trust/20">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-therapeutic-trust" />
                Objetivo desta avaliação
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A reflexão sobre estas questões visa proporcionar insights que serão fundamentais na definição de objetivos específicos a serem alcançados ao longo do processo terapêutico. Responda com honestidade e detalhe.
              </p>
            </Card>

            {perguntas.map((pergunta, index) => (
              <div key={pergunta.id} className="space-y-3">
                <Label htmlFor={pergunta.id} className="text-base font-semibold text-foreground">
                  {index + 1}. {pergunta.texto}
                </Label>
                <Textarea
                  id={pergunta.id}
                  placeholder={pergunta.placeholder}
                  value={respostas[pergunta.id] || ""}
                  onChange={(e) => handleChange(pergunta.id, e.target.value)}
                  className="min-h-[100px] text-base"
                />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            Material terapêutico desenvolvido para apoio ao processo de avaliação inicial em TCC
          </p>
        </Card>
      </main>
    </div>
  );
};

export default IdentificarProblemas;
