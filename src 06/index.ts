import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correios from "./Correios/Correios";
import ICorreio from "./Correios/ICorreio";
import Transportadora from "./Transportadora/Transportadora";

const pagamento : ICorreio = new Correios();
pagamento.sendCorreios();
pagamento.receiveCorreios();

const pagamento2 : ICorreio = new TransportadoraAdapter(new Transportadora());
pagamento2.sendCorreios();
pagamento2.receiveCorreios();