import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Brain, Heart, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";

const CrencasNucleares = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <Home className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
            </div>
            <h1 className="text-xl font-bold text-foreground">Crenças Nucleares</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-2">
              Psicoeducação TCC
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Compreender as Crenças Nucleares
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              As crenças nucleares são pensamentos fundamentais sobre nós próprios, os outros e o mundo.
              Compreendê-las é essencial para o processo terapêutico.
            </p>
          </div>

          <Tabs defaultValue="negativas" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="negativas">Crenças Negativas</TabsTrigger>
              <TabsTrigger value="adaptativas">Crenças Adaptativas</TabsTrigger>
            </TabsList>

            <TabsContent value="negativas" className="space-y-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    Crenças Nucleares Negativas Disfuncionais
                  </CardTitle>
                  <CardDescription>
                    Pensamentos persistentes e rígidos que tendem a ser extremos, irrealistas e prejudiciais
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    As crenças negativas disfuncionais são pensamentos persistentes e rígidos sobre si mesmo, 
                    sobre o mundo, sobre outras pessoas e sobre o futuro, que tendem a ser extremos, 
                    irrealistas e prejudiciais.
                  </p>
                  <p className="text-muted-foreground">
                    Estas crenças frequentemente desenvolvem-se em resposta a experiências passadas ou a 
                    ambientes físicos ou interpessoais mais perigosos, moldando a perspetiva de uma pessoa 
                    em relação a diversas áreas da vida.
                  </p>
                  <Alert>
                    <AlertDescription>
                      As crenças nucleares negativas sobre si mesmo manifestam-se em três categorias principais: 
                      <strong> desamparo, desamor e desvalor</strong>. É possível que alguém apresente uma, duas 
                      ou até as três categorias simultaneamente.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-destructive">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Shield className="h-5 w-5 text-destructive" />
                      Desamparo
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Características:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Sentimento de ineficiência ao realizar tarefas</li>
                        <li>Sensação de vulnerabilidade na autoproteção</li>
                        <li>Comparação negativa em relação a outras pessoas</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Exemplos de crenças:</h4>
                      <div className="space-y-1">
                        <Badge variant="outline" className="text-xs block w-full justify-start">
                          "Sou impotente"
                        </Badge>
                        <Badge variant="outline" className="text-xs block w-full justify-start">
                          "Sou fraco(a) e vulnerável"
                        </Badge>
                        <Badge variant="outline" className="text-xs block w-full justify-start">
                          "Sou incompetente"
                        </Badge>
                        <Badge variant="outline" className="text-xs block w-full justify-start">
                          "Sou incapaz"
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Heart className="h-5 w-5 text-primary" />
                      Desamor
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Características:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Qualidades que dificultam receber amor</li>
                        <li>Sentimento de incapacidade de ser amado</li>
                        <li>Dificuldade em manter relacionamentos saudáveis</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Exemplos de crenças:</h4>
                      <div className="space-y-1">
                        <Badge variant="outline" className="text-xs block w-full justify-start">
                          "Não sou digno(a) de amor"
                        </Badge>
                        <Badge variant="outline" className="text-xs block w-full justify-start">
                          "Sou indesejável"
                        </Badge>
                        <Badge variant="outline" className="text-xs block w-full justify-start">
                          "Sou dispensável"
                        </Badge>
                        <Badge variant="outline" className="text-xs block w-full justify-start">
                          "Não sou bom(a) o suficiente"
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-secondary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Award className="h-5 w-5 text-secondary" />
                      Desvalor
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Características:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                        <li>Sensação de ser imoral</li>
                        <li>Perceção de ser perigoso para os outros</li>
                        <li>Autoimagem negativa sobre moralidade</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Exemplos de crenças:</h4>
                      <div className="space-y-1">
                        <Badge variant="outline" className="text-xs block w-full justify-start">
                          "Sou imoral"
                        </Badge>
                        <Badge variant="outline" className="text-xs block w-full justify-start">
                          "Sou desprezível"
                        </Badge>
                        <Badge variant="outline" className="text-xs block w-full justify-start">
                          "Sou perigoso(a)"
                        </Badge>
                        <Badge variant="outline" className="text-xs block w-full justify-start">
                          "Sou inaceitável"
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-lg">Exemplo Clínico: O Caso da Ana</CardTitle>
                  <CardDescription>
                    Compreender como as três categorias se manifestam na prática
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Ana, uma mulher de 30 anos, enfrenta desafios na sua vida que ativaram crenças 
                    nucleares negativas nas três categorias. Vejamos alguns exemplos de pensamentos 
                    automáticos em cada categoria:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Desamparo:</h4>
                      <p className="text-xs text-muted-foreground italic">
                        "Não consigo fazer nada direito, falho sempre nas minhas tentativas."
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Desamor:</h4>
                      <p className="text-xs text-muted-foreground italic">
                        "Tenho tantos defeitos que ninguém poderia realmente amar-me."
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Desvalor:</h4>
                      <p className="text-xs text-muted-foreground italic">
                        "Sou uma pessoa má; causo sempre problemas aos outros."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="adaptativas" className="space-y-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Crenças Nucleares Adaptativas
                  </CardTitle>
                  <CardDescription>
                    Pensamentos positivos que contribuem para o bem-estar e uma vida significativa
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Cada um de nós possui crenças nucleares adaptativas que, quando ativadas, 
                    contribuem para o nosso bem-estar. Quando estas crenças estão ativas e fortes, 
                    é mais provável que experimentemos uma melhoria no nosso bem-estar e 
                    desfrutemos de uma vida mais significativa.
                  </p>
                  <Alert className="bg-primary/5 border-primary/20">
                    <AlertDescription>
                      Se, ao tentar modificar níveis mais superficiais da cognição (pensamentos e 
                      pressupostos), não alcançarmos os resultados esperados, é possível que as 
                      crenças positivas estejam enfraquecidas e necessitem ser fortalecidas.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gradient-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Características das Crenças Adaptativas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Flexíveis, úteis e fundamentadas na realidade
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Incluem visões positivas sobre si mesmo, o mundo e o futuro
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Visão equilibrada das outras pessoas
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Crença na capacidade de lidar com a maioria das situações
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Exemplos de Crenças Adaptativas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Badge className="w-full justify-start py-2">
                      "Mereço ser amado(a)"
                    </Badge>
                    <Badge className="w-full justify-start py-2">
                      "Sou inteligente"
                    </Badge>
                    <Badge className="w-full justify-start py-2">
                      "Sou capaz de enfrentar e resolver problemas"
                    </Badge>
                    <Badge className="w-full justify-start py-2">
                      "Sou digno(a) de felicidade"
                    </Badge>
                    <Badge className="w-full justify-start py-2">
                      "Sou competente"
                    </Badge>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Perceção do Futuro</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pessoas com crenças adaptativas têm uma visão equilibrada do futuro, 
                    incluindo experiências positivas, neutras e negativas. Acreditam que podem 
                    superar adversidades, muitas vezes com o apoio de outras pessoas. 
                    Em circunstâncias normais, rapidamente retornam às suas crenças adaptativas 
                    após momentos difíceis.
                  </p>
                </CardContent>
              </Card>

              <Alert>
                <AlertDescription>
                  <strong>Nota Importante:</strong> Pessoas com crenças adaptativas mais fracas 
                  podem precisar de tratamento para desenvolvê-las e fortalecê-las. O processo 
                  terapêutico envolve reunir evidências que sustentem cada crença positiva.
                </AlertDescription>
              </Alert>
            </TabsContent>
          </Tabs>

          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <p className="text-xs text-muted-foreground text-center">
                Baseado em: Beck, J. S. (2022). Terapia Cognitivo-Comportamental: Teoria e Prática (3ª ed.). 
                Porto Alegre: Artmed. | Greenberger, D. & Padesky, C. A. (2017). A Mente Vencendo o Humor (2ª ed.).
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CrencasNucleares;