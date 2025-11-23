import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Home, CheckCircle2, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const AvaliacaoPensamentos = () => {
  const [checklist, setChecklist] = useState<{[key: string]: boolean}>({});

  const checklistQuestions = [
    { id: "q1", label: "Qual é a situação?" },
    { id: "q2", label: "No que está a pensar ou a imaginar?" },
    { id: "q3", label: "Como isso faz com que se sinta?" },
    { id: "q4", label: "O que o faz acreditar que esse pensamento é verdadeiro?" },
    { id: "q5", label: "O que o faz acreditar que esse pensamento não é verdadeiro ou não é completamente verdadeiro?" },
    { id: "q6", label: "De que outra forma poderia encarar isso?" },
    { id: "q7", label: "O que de pior poderia acontecer? O que poderia fazer nesse caso?" },
    { id: "q8", label: "O que de melhor poderia acontecer?" },
    { id: "q9", label: "O que provavelmente vai acontecer?" },
    { id: "q10", label: "O que poderia acontecer se mudasse o seu pensamento?" },
    { id: "q11", label: "O que diria ao seu melhor amigo(a) se isso acontecesse com ele/ela?" },
    { id: "q12", label: "O que deveria fazer agora?" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <Home className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <h1 className="text-xl font-bold text-foreground">Avaliação de Pensamentos</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-2">
              Ferramentas TCC
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Métodos de Avaliação de Pensamentos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Diferentes abordagens para identificar, questionar e reestruturar pensamentos disfuncionais
            </p>
          </div>

          <Tabs defaultValue="checklist" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="checklist">Checklist</TabsTrigger>
              <TabsTrigger value="perspectiva">Perspetiva Alternativa</TabsTrigger>
              <TabsTrigger value="avaliacao">Avaliação Precisa</TabsTrigger>
            </TabsList>

            <TabsContent value="checklist" className="space-y-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Checklist de Avaliação de Pensamentos Automáticos
                  </CardTitle>
                  <CardDescription>
                    Use esta lista para explorar e questionar pensamentos automáticos de forma estruturada
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-sm text-muted-foreground">
                    Pode escrever as respostas no espaço abaixo de cada pergunta, ou marcar apenas a 
                    caixa de seleção para não esquecer nenhuma questão importante.
                  </p>

                  {checklistQuestions.map((question, index) => (
                    <div key={question.id} className="space-y-2 p-4 rounded-lg bg-muted/30">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id={question.id}
                          checked={checklist[question.id] || false}
                          onCheckedChange={(checked) => 
                            setChecklist(prev => ({ ...prev, [question.id]: checked === true }))
                          }
                          className="mt-1"
                        />
                        <div className="flex-1 space-y-2">
                          <Label htmlFor={question.id} className="text-base font-medium cursor-pointer">
                            {index + 1}. {question.label}
                          </Label>
                          <Textarea
                            placeholder="Escreva a sua resposta aqui..."
                            className="min-h-[80px]"
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1">Guardar Respostas</Button>
                    <Button variant="outline" className="flex-1">Limpar Formulário</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted/30">
                <CardContent className="pt-6">
                  <p className="text-xs text-muted-foreground text-center">
                    Baseado em: Beck, J. S. (2022). Terapia Cognitivo-Comportamental: Teoria e Prática (3ª ed.). 
                    Porto Alegre: Artmed, p. 239.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="perspectiva" className="space-y-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Avaliando Pensamentos: Perspetiva Alternativa</CardTitle>
                  <CardDescription>
                    Explore diferentes interpretações de eventos, pensamentos e emoções
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Na TCC, perspetiva alternativa significa explorar diferentes interpretações de eventos, 
                    pensamentos e emoções. Isto ajuda a evitar visões automáticas, considerando explicações 
                    mais equilibradas. Ao ampliar perspetivas, testamos pensamentos distorcidos, promovendo 
                    uma compreensão mais abrangente e adaptativa.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Situação</CardTitle>
                  <CardDescription>
                    Descreva o contexto da situação a analisar
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Quem estava ao seu redor?</Label>
                    <Input placeholder="Descreva as pessoas presentes..." />
                  </div>
                  <div className="space-y-2">
                    <Label>Qual atividade estava a realizar?</Label>
                    <Input placeholder="Descreva a atividade..." />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Em que lugar se encontrava?</Label>
                      <Input placeholder="Local..." />
                    </div>
                    <div className="space-y-2">
                      <Label>Em que momento ocorreu?</Label>
                      <Input placeholder="Data e hora..." />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Pensamento</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground mb-3">
                      Como interpretou o que ocorreu? O que pensou naquele momento?
                    </p>
                    <Textarea 
                      placeholder="Escreva o seu pensamento..."
                      className="min-h-[150px]"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Emoção</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground mb-3">
                      Como se sentiu nessa situação?
                    </p>
                    <Textarea 
                      placeholder="Descreva as suas emoções..."
                      className="min-h-[100px]"
                    />
                    <div className="space-y-2 mt-4">
                      <Label>Intensidade (0-100)</Label>
                      <Input type="number" min="0" max="100" placeholder="0" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary">
                  <CardHeader>
                    <CardTitle className="text-lg">Explicação Alternativa</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground mb-3">
                      Experimente analisar esta situação sob uma perspetiva alternativa
                    </p>
                    <Textarea 
                      placeholder="Que outras formas existem de interpretar esta situação?..."
                      className="min-h-[150px]"
                    />
                  </CardContent>
                </Card>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1">Guardar Análise</Button>
                <Button variant="outline" className="flex-1">Nova Análise</Button>
              </div>

              <Card className="bg-muted/30">
                <CardContent className="pt-6">
                  <p className="text-xs text-muted-foreground text-center">
                    Baseado em: Beck, J. S. (2022). Terapia Cognitivo-Comportamental: Teoria e Prática (3ª ed.). 
                    Porto Alegre: Artmed, p. 242.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="avaliacao" className="space-y-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    Avaliação Precisa de Pensamentos Disfuncionais
                  </CardTitle>
                  <CardDescription>
                    Análise detalhada da validade e utilidade dos pensamentos automáticos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-base">Qual é o seu pensamento automático disfuncional?</Label>
                    <Textarea 
                      placeholder="Descreva o pensamento que gostaria de avaliar..."
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">1. Evidência</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Quais evidências concretas existem para apoiar esse pensamento?</Label>
                    <Textarea placeholder="Liste as evidências a favor..." className="min-h-[80px]" />
                  </div>
                  <div className="space-y-2">
                    <Label>Existe alguma evidência que contradiz ou questiona esse pensamento?</Label>
                    <Textarea placeholder="Liste as evidências contra..." className="min-h-[80px]" />
                  </div>
                  <div className="space-y-2">
                    <Label>Qual é a probabilidade de que esse pensamento realmente se concretize? (0-100%)</Label>
                    <Input type="number" min="0" max="100" placeholder="%" />
                  </div>
                  <div className="space-y-2">
                    <Label>Quais seriam as conclusões de outra pessoa diante destas evidências?</Label>
                    <Textarea placeholder="Perspetiva externa..." className="min-h-[80px]" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">2. Utilidade</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Como este pensamento contribui para o alcance dos seus objetivos?</Label>
                    <Textarea placeholder="Analise a utilidade..." className="min-h-[80px]" />
                  </div>
                  <div className="space-y-2">
                    <Label>Este pensamento está a ajudar a resolver o problema ou a situação?</Label>
                    <Textarea placeholder="Sim/Não e porquê..." className="min-h-[80px]" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">3. Perspetivas Alternativas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Existem interpretações mais adaptativas para esta situação?</Label>
                    <Textarea placeholder="Explore alternativas..." className="min-h-[80px]" />
                  </div>
                  <div className="space-y-2">
                    <Label>Como uma pessoa próxima poderia perceber esta situação de forma diferente?</Label>
                    <Textarea placeholder="Outra perspetiva..." className="min-h-[80px]" />
                  </div>
                  <div className="space-y-2">
                    <Label>Se um amigo estivesse a passar por algo semelhante, que conselho daria?</Label>
                    <Textarea placeholder="O seu conselho..." className="min-h-[80px]" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">4. Erros de Pensamento</CardTitle>
                  <CardDescription>
                    Identifique possíveis distorções cognitivas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-muted/30 rounded-lg space-y-2">
                    <p className="text-sm font-medium">
                      Está a tirar uma conclusão precipitada baseada num único evento?
                    </p>
                    <Textarea placeholder="Reflexão..." className="min-h-[60px]" />
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg space-y-2">
                    <p className="text-sm font-medium">
                      Existem aspetos positivos que está a deixar de lado?
                    </p>
                    <Textarea placeholder="Reflexão..." className="min-h-[60px]" />
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg space-y-2">
                    <p className="text-sm font-medium">
                      Está a assumir responsabilidade total por algo com várias influências externas?
                    </p>
                    <Textarea placeholder="Reflexão..." className="min-h-[60px]" />
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg space-y-2">
                    <p className="text-sm font-medium">
                      Está a pensar de forma "tudo ou nada", sem reconhecer um meio-termo?
                    </p>
                    <Textarea placeholder="Reflexão..." className="min-h-[60px]" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <CardTitle>Pensamento Reformulado</CardTitle>
                  <CardDescription>
                    Após a avaliação, como poderia reformular o pensamento de forma mais adaptativa?
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea 
                    placeholder="Escreva a versão mais equilibrada e realista do pensamento..."
                    className="min-h-[120px]"
                  />
                </CardContent>
              </Card>

              <div className="flex gap-3">
                <Button className="flex-1">Guardar Avaliação</Button>
                <Button variant="outline" className="flex-1">Nova Avaliação</Button>
              </div>

              <Card className="bg-muted/30">
                <CardContent className="pt-6">
                  <p className="text-xs text-muted-foreground text-center">
                    Baseado em: Beck, J. S. (2022). Terapia Cognitivo-Comportamental: Teoria e Prática (3ª ed.). | 
                    Leahy, R. L. (2019). Técnicas de Terapia Cognitiva: Manual do Terapeuta (2ª ed.).
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default AvaliacaoPensamentos;