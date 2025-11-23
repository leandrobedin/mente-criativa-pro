import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AvaliacaoInicial from "./pages/AvaliacaoInicial";
import Configuracoes from "./pages/Configuracoes";
import CrencasIntermediarias from "./pages/CrencasIntermediarias";
import ModeloIceberg from "./pages/ModeloIceberg";
import ModeloArvore from "./pages/ModeloArvore";
import PensamentosAutomaticos from "./pages/PensamentosAutomaticos";
import CrencasNucleares from "./pages/CrencasNucleares";
import AvaliacaoPensamentos from "./pages/AvaliacaoPensamentos";
import Descatastrofizacao from "./pages/Descatastrofizacao";
import PensamentoCompaixao from "./pages/PensamentoCompaixao";
import AdvogadoDefesa from "./pages/AdvogadoDefesa";
import AnaliseCustoBeneficio from "./pages/AnaliseCustoBeneficio";
import DiagramaConceitualizacao from "./pages/DiagramaConceitualizacao";
import ExaminandoEvidencias from "./pages/ExaminandoEvidencias";
import ExperimentoComportamental from "./pages/ExperimentoComportamental";
import IdentificarProblemas from "./pages/IdentificarProblemas";
import ListaDistorcoes from "./pages/ListaDistorcoes";
import ModificacaoCrencas from "./pages/ModificacaoCrencas";
import GuiaReestruturacao from "./pages/GuiaReestruturacao";
import RegistoExposicao from "./pages/RegistoExposicao";
import IdentificarDistorcoes from "./pages/IdentificarDistorcoes";
import RegistoPensamento from "./pages/RegistoPensamento";
import SetaDescendente from "./pages/SetaDescendente";
import SolucaoProblemas from "./pages/SolucaoProblemas";
import ResolvendoProblemas from "./pages/ResolvendoProblemas";
import PerguntasPensamentos from "./pages/PerguntasPensamentos";
import FortalecerCrencas from "./pages/FortalecerCrencas";
import TomandoDecisoes from "./pages/TomandoDecisoes";
import PlanoSeguranca from "./pages/PlanoSeguranca";
import MonitoramentoAnsiedade from "./pages/MonitoramentoAnsiedade";
import ArvoreDecisao from "./pages/ArvoreDecisao";
import Autotranquilizacao from "./pages/Autotranquilizacao";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/avaliacao-inicial" element={<AvaliacaoInicial />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/crencas-intermediarias" element={<CrencasIntermediarias />} />
          <Route path="/modelo-iceberg" element={<ModeloIceberg />} />
          <Route path="/modelo-arvore" element={<ModeloArvore />} />
          <Route path="/pensamentos-automaticos" element={<PensamentosAutomaticos />} />
          <Route path="/crencas-nucleares" element={<CrencasNucleares />} />
          <Route path="/avaliacao-pensamentos" element={<AvaliacaoPensamentos />} />
          <Route path="/descatastrofizacao" element={<Descatastrofizacao />} />
          <Route path="/pensamento-compaixao" element={<PensamentoCompaixao />} />
          <Route path="/advogado-defesa" element={<AdvogadoDefesa />} />
          <Route path="/analise-custo-beneficio" element={<AnaliseCustoBeneficio />} />
          <Route path="/diagrama-conceitualizacao" element={<DiagramaConceitualizacao />} />
          <Route path="/examinando-evidencias" element={<ExaminandoEvidencias />} />
          <Route path="/experimento-comportamental" element={<ExperimentoComportamental />} />
          <Route path="/identificar-problemas" element={<IdentificarProblemas />} />
          <Route path="/lista-distorcoes" element={<ListaDistorcoes />} />
          <Route path="/modificacao-crencas" element={<ModificacaoCrencas />} />
          <Route path="/guia-reestruturacao" element={<GuiaReestruturacao />} />
          <Route path="/registo-exposicao" element={<RegistoExposicao />} />
          <Route path="/identificar-distorcoes" element={<IdentificarDistorcoes />} />
          <Route path="/registo-pensamento" element={<RegistoPensamento />} />
          <Route path="/seta-descendente" element={<SetaDescendente />} />
          <Route path="/solucao-problemas" element={<SolucaoProblemas />} />
          <Route path="/resolvendo-problemas" element={<ResolvendoProblemas />} />
          <Route path="/perguntas-pensamentos" element={<PerguntasPensamentos />} />
          <Route path="/fortalecer-crencas" element={<FortalecerCrencas />} />
          <Route path="/tomando-decisoes" element={<TomandoDecisoes />} />
          <Route path="/plano-seguranca" element={<PlanoSeguranca />} />
          <Route path="/monitoramento-ansiedade" element={<MonitoramentoAnsiedade />} />
          <Route path="/arvore-decisao" element={<ArvoreDecisao />} />
          <Route path="/autotranquilizacao" element={<Autotranquilizacao />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
