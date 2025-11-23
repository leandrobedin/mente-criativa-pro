import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save, FileText, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import PrintHeader from "@/components/PrintHeader";

const AvaliacaoInicial = () => {
  const sections = [
    {
      title: "Informações Pessoais",
      icon: FileText,
      fields: [
        { label: "Nome Completo", type: "text", placeholder: "Digite o nome do paciente" },
        { label: "Data de Nascimento", type: "date" },
        { label: "Morada", type: "text", placeholder: "Rua, número, localidade" },
        { label: "Local de Nascimento", type: "text" },
        { label: "Género", type: "text" },
        { label: "Telefone", type: "tel", placeholder: "+351" },
        { label: "NIF/CPF", type: "text" },
        { label: "Número de Filhos", type: "number" },
        { label: "Estado Civil", type: "text" },
        { label: "Nível de Instrução", type: "text" },
        { label: "Ocupação/Profissão", type: "text" },
        { label: "Já fez terapia anteriormente?", type: "textarea", rows: 3 },
        { label: "Nome e contacto de pessoa próxima", type: "text" },
      ],
    },
    {
      title: "Objetivos Terapêuticos",
      fields: [
        { 
          label: "Quais são as três principais dificuldades que motivaram a procura de ajuda?", 
          type: "textarea", 
          rows: 5,
          placeholder: "Descreva as principais queixas ou dificuldades..."
        },
        { 
          label: "Objetivos e expectativas para a terapia", 
          type: "textarea", 
          rows: 5,
          placeholder: "O que espera alcançar com o processo terapêutico..."
        },
      ],
    },
    {
      title: "Estilo de Vida",
      fields: [
        { label: "Descreva a rotina diária típica", type: "textarea", rows: 4 },
        { label: "Os fins de semana são diferentes dos dias típicos?", type: "textarea", rows: 3 },
        { label: "Como são os hábitos de sono? Dorme o suficiente?", type: "textarea", rows: 3 },
        { label: "Pratica atividade física regularmente? Qual o nível?", type: "textarea", rows: 3 },
        { label: "Como são os hábitos alimentares?", type: "textarea", rows: 3 },
        { label: "Usa substâncias (álcool, drogas, tabaco)? Com que frequência?", type: "textarea", rows: 3 },
        { label: "O peso atual está adequado? Preocupações relacionadas?", type: "textarea", rows: 3 },
      ],
    },
    {
      title: "Histórico Médico",
      fields: [
        { label: "Problemas de saúde atuais", type: "textarea", rows: 3 },
        { label: "Quando foi a última consulta médica (check-up)?", type: "text" },
        { label: "Alterações na saúde geral no último ano?", type: "textarea", rows: 3 },
        { label: "Tem algum problema de saúde crónico?", type: "textarea", rows: 3 },
        { label: "Possui alguma alergia conhecida?", type: "textarea", rows: 2 },
        { label: "Está a tomar algum medicamento regularmente?", type: "textarea", rows: 3 },
        { label: "Já foi hospitalizado? Por qual motivo?", type: "textarea", rows: 3 },
        { label: "Passou por alguma cirurgia? Qual o motivo?", type: "textarea", rows: 3 },
      ],
    },
    {
      title: "Histórico Psiquiátrico",
      fields: [
        { label: "Já esteve internado por questões emocionais/psiquiátricas? Quantas vezes e motivos?", type: "textarea", rows: 4 },
        { label: "Já recebeu tratamento psicológico/psiquiátrico? Quais os resultados?", type: "textarea", rows: 4 },
        { label: "Passou por algum trauma significativo no passado?", type: "textarea", rows: 4 },
        { label: "Eventos estressantes recentes?", type: "textarea", rows: 3 },
        { label: "Histórico familiar de transtornos mentais ou abuso de substâncias?", type: "textarea", rows: 4 },
        { label: "Está a fazer uso de medicação psiquiátrica? Nome, dosagem e frequência", type: "textarea", rows: 3 },
        { label: "Já pensou em suicídio ou tentou? Pensamentos de se magoar?", type: "textarea", rows: 4 },
      ],
    },
    {
      title: "Histórico da Infância e Adolescência",
      fields: [
        { label: "Como era a dinâmica familiar quando era mais jovem?", type: "textarea", rows: 4 },
        { label: "Como eram os relacionamentos com pais e irmãos?", type: "textarea", rows: 4 },
        { label: "Houve algum evento importante ou conflito familiar?", type: "textarea", rows: 4 },
        { label: "Como era a relação com colegas e amigos?", type: "textarea", rows: 3 },
        { label: "Sofreu bullying na escola ou outras situações difíceis?", type: "textarea", rows: 3 },
        { label: "Como foi o desempenho académico?", type: "textarea", rows: 3 },
      ],
    },
    {
      title: "Relacionamentos e Vida Social",
      fields: [
        { label: "Qual é o seu estado civil atual?", type: "text" },
        { label: "Como descreveria o relacionamento com o parceiro/parceira?", type: "textarea", rows: 4 },
        { label: "Como são os relacionamentos com familiares?", type: "textarea", rows: 3 },
        { label: "Tem um grupo de amigos próximos? Como são essas amizades?", type: "textarea", rows: 3 },
        { label: "Sente-se satisfeito com a vida social?", type: "textarea", rows: 3 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50 no-print">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold text-foreground">Avaliação Inicial</h1>
                <p className="text-sm text-muted-foreground">Questionário completo para pacientes</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => window.print()}>
              <Printer className="h-4 w-4 mr-2" />
              Imprimir
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <PrintHeader title="Avaliação Inicial" />
        <Card className="p-8 mb-6 bg-primary/5 border-primary/20">
          <div className="flex gap-4">
            <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground">Informação para Profissionais</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Este questionário foi desenvolvido para ser preenchido durante a sessão inicial com o paciente. 
                As informações recolhidas são essenciais para estabelecer uma compreensão completa do histórico 
                e das necessidades do paciente, fundamentando o planeamento terapêutico.
              </p>
            </div>
          </div>
        </Card>

        <form className="space-y-8">
          {sections.map((section, sectionIndex) => (
            <Card key={sectionIndex} className="p-6 shadow-soft bg-gradient-card">
              <h3 className="text-2xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                {section.title}
              </h3>
              <div className="space-y-6">
                {section.fields.map((field, fieldIndex) => (
                  <div key={fieldIndex} className="space-y-2">
                    <Label htmlFor={`${sectionIndex}-${fieldIndex}`} className="text-foreground font-medium">
                      {field.label}
                    </Label>
                    {field.type === "textarea" ? (
                      <Textarea
                        id={`${sectionIndex}-${fieldIndex}`}
                        placeholder={field.placeholder}
                        rows={field.rows || 3}
                        className="resize-none"
                      />
                    ) : (
                      <Input
                        id={`${sectionIndex}-${fieldIndex}`}
                        type={field.type}
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                ))}
              </div>
            </Card>
          ))}

          <div className="flex gap-4 justify-end sticky bottom-4 no-print">
            <Button variant="outline" type="button">
              Limpar Formulário
            </Button>
            <Button type="submit" className="gap-2">
              <Save className="h-4 w-4" />
              Guardar Avaliação
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AvaliacaoInicial;
