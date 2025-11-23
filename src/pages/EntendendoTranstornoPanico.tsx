import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import PrintHeader from "@/components/PrintHeader";
import { Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface PanicoRow {
  situacao: string;
  pensamentos: string;
  sintomas: string;
  comportamento: string;
}

const EntendendoTranstornoPanico = () => {
  const [rows, setRows] = useState<PanicoRow[]>([
    { situacao: "", pensamentos: "", sintomas: "", comportamento: "" },
    { situacao: "", pensamentos: "", sintomas: "", comportamento: "" },
    { situacao: "", pensamentos: "", sintomas: "", comportamento: "" }
  ]);

  const exemplos: PanicoRow[] = [
    {
      situacao: "Medo de ter uma crise",
      pensamentos: "Se eu tiver uma crise, algo terrível vai acontecer",
      sintomas: "Medo intenso de morrer, despersonalização, desrealização",
      comportamento: "Evitar atividades que possam desencadear uma crise"
    },
    {
      situacao: "Sensações corporais",
      pensamentos: "Essas sensações são sinais de algo grave",
      sintomas: "Hipervigilância, sensibilidade a mudanças corporais",
      comportamento: "Evitar atividades físicas"
    },
    {
      situacao: "Fazer exercícios físicos",
      pensamentos: "Vou ter uma paragem cardíaca durante o exercício",
      sintomas: "Sensação de desmaio, hiperventilação",
      comportamento: "Evitar atividades físicas, restrição de movimento"
    }
  ];

  const handleRowChange = (index: number, field: keyof PanicoRow, value: string) => {
    const newRows = [...rows];
    newRows[index] = { ...newRows[index], [field]: value };
    setRows(newRows);
  };

  const handleSave = () => {
    toast.success("Dados guardados com sucesso!");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <PrintHeader title="Entendendo o Transtorno de Pânico" />
        
        <div className="print:hidden">
          <Button variant="outline" onClick={() => window.history.back()} className="mb-4">
            ← Voltar
          </Button>
        </div>

        <Card className="shadow-lg border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
            <div className="flex items-center gap-3">
              <Heart className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-2xl md:text-3xl">Transtorno de Pânico</CardTitle>
                <CardDescription className="text-base mt-2">
                  Compreender os ataques de pânico e o medo de ter novos episódios
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 md:p-8 space-y-8">
            <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <AlertDescription className="text-blue-900 dark:text-blue-200">
                <p className="font-medium mb-2">💙 Mensagem Importante:</p>
                <p>
                  Sei que enfrentar os ataques de pânico pode ser assustador e desafiador, mas quero lembrar-me 
                  de algo importante: <strong>mesmo que pareça assustador, o ataque de pânico não é perigoso 
                  e eu não vou morrer.</strong>
                </p>
              </AlertDescription>
            </Alert>

            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                O Transtorno de Pânico caracteriza-se por ataques de pânico recorrentes e inesperados, seguidos 
                de preocupação persistente sobre ter novos ataques. Compreender os padrões pode ajudar a 
                desenvolver estratégias de enfrentamento.
              </p>
            </div>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">📚 Exemplos Comuns no Transtorno de Pânico</h3>
              <div className="overflow-x-auto">
                <Table className="border">
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-bold">Situações</TableHead>
                      <TableHead className="font-bold">Pensamentos Disfuncionais</TableHead>
                      <TableHead className="font-bold">Sintomas de Ansiedade</TableHead>
                      <TableHead className="font-bold">Comportamento</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {exemplos.map((exemplo, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{exemplo.situacao}</TableCell>
                        <TableCell className="text-sm">{exemplo.pensamentos}</TableCell>
                        <TableCell className="text-sm">{exemplo.sintomas}</TableCell>
                        <TableCell className="text-sm">{exemplo.comportamento}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">✍️ Os Seus Ataques de Pânico</h3>
              <p className="text-sm text-muted-foreground">
                Registe as situações que desencadeiam ou estão associadas aos ataques de pânico, os pensamentos 
                que surgem, os sintomas que experiencia e os comportamentos de evitação resultantes.
              </p>
              <div className="overflow-x-auto">
                <Table className="border">
                  <TableHeader>
                    <TableRow className="bg-primary/10">
                      <TableHead className="font-bold">Situações</TableHead>
                      <TableHead className="font-bold">Pensamentos Disfuncionais</TableHead>
                      <TableHead className="font-bold">Sintomas de Ansiedade</TableHead>
                      <TableHead className="font-bold">Comportamento</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Textarea
                            value={row.situacao}
                            onChange={(e) => handleRowChange(index, "situacao", e.target.value)}
                            placeholder="Que situação desencadeou o ataque?"
                            className="min-h-[80px] text-sm"
                          />
                        </TableCell>
                        <TableCell>
                          <Textarea
                            value={row.pensamentos}
                            onChange={(e) => handleRowChange(index, "pensamentos", e.target.value)}
                            placeholder="Que pensamentos teve?"
                            className="min-h-[80px] text-sm"
                          />
                        </TableCell>
                        <TableCell>
                          <Textarea
                            value={row.sintomas}
                            onChange={(e) => handleRowChange(index, "sintomas", e.target.value)}
                            placeholder="Que sintomas físicos sentiu?"
                            className="min-h-[80px] text-sm"
                          />
                        </TableCell>
                        <TableCell>
                          <Textarea
                            value={row.comportamento}
                            onChange={(e) => handleRowChange(index, "comportamento", e.target.value)}
                            placeholder="Como reagiu ou o que evita agora?"
                            className="min-h-[80px] text-sm"
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>

            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-sm text-amber-900 dark:text-amber-200">
                ⚠️ <strong>Nota Importante:</strong> Cada pessoa vivencia diferentes características diagnósticas 
                associadas ao transtorno de pânico. Procure ajuda profissional para um diagnóstico preciso.
              </p>
            </div>

            <div className="flex gap-4 justify-end print:hidden pt-6">
              <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                💾 Guardar
              </Button>
              <Button onClick={handlePrint} variant="outline">
                🖨️ Imprimir
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EntendendoTranstornoPanico;
