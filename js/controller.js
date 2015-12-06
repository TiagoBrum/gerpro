angular.module('gerPro', [])
    .controller('GerProController', ['$scope', function($scope) {

        /**
         *Objetos principais
        **/
        $scope.oController = {action: null,option: undefined, module:undefined, som: true, sound:"/sounds/audio1.mp3"};
        $scope.atividades = [];
        $scope.atividade = {};
        $scope.conteudos = [
            {title: "Gerência de Projetos - Introdução", link:"/pages/gpIntro.html", som: "/sounds/gpIntro.mp3"},
            {title: "Gestão de projetos na prática", link:"/pages/gpPratica.html", som: "/sounds/gpPratica.mp3"},
            {title: "Anatomia de um projeto", link:"/pages/gpAnatomia.html", som: "/sounds/gpAnatomia.mp3"},
            {title: "Abordagens em gestão de projeto", link:"/pages/gpAbordagem.html", som: "/sounds/gpAbordagem.mp3"},

        ];

        $scope.conteudoA = {option:undefined, link: undefined, title: undefined};
        $scope.partida = {};

        /**
         * Executa acoes de acordo com as teclas
        **/
        $scope.actions = function(){
            console.log(event.keyCode);
            var option = event.keyCode;
            switch(option){
                case 49: //1
                    if($scope.oController.action !== 1 && $scope.oController.action !== 2) return;
                    if($scope.oController.action == 1){
                        console.log("option 1");
                        $scope.partida.option = 1;
                        $scope.oController.msg = $scope.atividade.oAlternativas[$scope.partida.option-1].alternativa;
                        setTimeout(function(){
                            $scope.$apply();                            
                            document.querySelector('#vPergunta').speak();
                        },500);
                    }else{
                        console.log("option 1");
                        $scope.conteudoA.option = 0;
                        $scope.oController.msg = $scope.conteudos[0].title;
                        setTimeout(function(){
                            $scope.$apply();                            
                            document.querySelector('#vPergunta').speak();
                        },500);
                    }
                    break;
                case 50: //2
                    if($scope.oController.action !== 1 && $scope.oController.action !== 2) return;
                    if($scope.oController.action == 1){
                        console.log("option 2");
                        $scope.partida.option = 2;
                        $scope.oController.msg = $scope.atividade.oAlternativas[$scope.partida.option-1].alternativa;
                        setTimeout(function(){
                            $scope.$apply();
                            document.querySelector('#vPergunta').speak();
                        },500);
                    }else{
                        console.log("option 2");
                        $scope.conteudoA.option = 1;
                        $scope.oController.msg = $scope.conteudos[1].title;
                        setTimeout(function(){
                            $scope.$apply();
                            document.querySelector('#vPergunta').speak();
                        },500);
                    }
                    break;
                case 51: //3
                    if($scope.oController.action !== 1 && $scope.oController.action !== 2) return;
                    if($scope.oController.action == 1){
                        console.log("option 3");
                        $scope.partida.option = 3;
                        $scope.oController.msg = $scope.atividade.oAlternativas[$scope.partida.option-1].alternativa;
                        setTimeout(function(){
                            $scope.$apply();
                            document.querySelector('#vPergunta').speak();
                        },500);
                    }else{
                        console.log("option 3");
                        $scope.conteudoA.option = 2;
                        $scope.oController.msg = $scope.conteudos[2].title;
                        setTimeout(function(){
                            $scope.$apply();
                            document.querySelector('#vPergunta').speak();
                        },500);
                    }
                    break;
                case 52: //4
                    if($scope.oController.action !== 1 && $scope.oController.action !== 2) return;
                    if($scope.oController.action == 1){
                        console.log("option 4");
                        $scope.partida.option = 4;
                        $scope.oController.msg = $scope.atividade.oAlternativas[$scope.partida.option-1].alternativa;
                        setTimeout(function(){
                            $scope.$apply();                            
                        },500);
                        document.querySelector('#vPergunta').speak();
                    }else{
                        console.log("option 4");
                        $scope.conteudoA.option = 3;
                        $scope.oController.msg = $scope.conteudos[3].title;
                        setTimeout(function(){
                            $scope.$apply();
                        },500);
                        document.querySelector('#vPergunta').speak();
                    }
                    break;
                case 65: //A
                    if($scope.oController.action !== null) return;
                    console.log("A - atividade");
                    $scope.oController.msg = "Atividades";
                    setTimeout(function(){
                        $scope.$apply();
                        document.querySelector('#vPergunta').speak();
                    },100);
                    setTimeout(function(){
                        $scope.oController.action = 1;
                        $scope.init();
                    },100);
                    break;
                case 72: //H
                    console.log("H - Ajuda");
                    $scope.oController.sound = "/sounds/ajuda.mp3";
                    setTimeout(function(){
                        //$scope.$apply();
                        document.getElementById("somPrincipal").play();
                    },500);
                    break;
                case 80: //P
                    if($scope.oController.action !== 1) return;
                    console.log("p - progresso");
                    $scope.oController.msg = "Você fez até agora "+($scope.partida.progresso -1) +" atividades de um total de "+$scope.atividades.length+", acertou "+$scope.partida.acertos+ "e errou "+$scope.partida.erros;
                    document.querySelector('#vPergunta').speak();
                    setTimeout(function(){
                        //$scope.$apply();
                    },500);
                    break;
                case 82: //R
                    console.log("R - repetir atividade");
                    document.getElementById("somPrincipal").play();
                    break;
                case 67: //c
                    if($scope.oController.action != null) return;
                    console.log("C - Conteudo");
                    $scope.conteudoA = {option:undefined, link: undefined, title: undefined};
                    $scope.oController.msg = "Conteúdo";
                    $scope.oController.action = 2;
                    setTimeout(function(){
                        $scope.$apply();
                        document.querySelector('#vPergunta').speak();
                    },500);
                    break;
                case 13: //Enter
                    console.log("Enter");
                    if($scope.oController.action == 1){
                        $scope.confirm();
                    }else{
                        $scope.copyConteudo($scope.conteudoA.option);
                        $scope.oController.module = true;
                    }
                    break;
                case 27: //Esc
                    console.log("Esc");
                    $scope.oController.action = null;
                    $scope.oController.module = false;
                    $scope.conteudoA.option = undefined;
                    $scope.oController.sound = null;
                    document.getElementById("somPrincipal").cancel();
                    document.querySelector('#vPergunta').cancel();
                    //setTimeout(function(){
                    //$scope.$apply();
                    //},10);
                    break;
                case 90: //Z
                    console.log("Z");
                    if($scope.oController.action == 2){
                        $scope.conteudoA.option = undefined;
                        $scope.oController.module = false;
                        document.getElementById("somPrincipal").pause();
                    }
                    break;
            }
        };


        /**
         * inicia os valores para as atividades
         */
        $scope.init = function(){
            var oPartida={acertos: 0, erros: 0, progresso: 0, alert: null, resposta: false, option: false};

            var oAtividade = [
                {pergunta:"Durante a fase de planejamento, a empresa requisitou outro gerente de projetos para tomar a frente, uma vez que o projeto em questão era muito complexo, envolvendo uma série de fornecedores e o gerente atual não possua as características necessárias para o andamento esperado pelo patrocinador. Desta forma, qual a características que o novo gerente deverá possuir?", 
                 resposta:"Alternativa “2”, Proativo. Como este projeto possui vários fornecedores a rede de comunicação envolvida é muito complexa, devendo o gerente de projetos tomar uma série de iniciativas preventivas para baixar custo, verificar a qualidade dos serviços prestados pelos fornecedores e o tempo de entrega dos mesmos", 
                 mark:false, vdd:false, per:"/sounds/per1.mp3", res:"/sounds/res1.mp3", oAlternativas: [
                     {alternativa:"1 - Técnico", vdd:false},
                     {alternativa:"2 - Proativo", vdd:true},
                     {alternativa:"3 - Expeditor", vdd:false},
                     {alternativa:"4 - Calmo", vdd:false},
                 ]},
                {pergunta:"Os membros de uma equipe de projetos reclamam entre si que o gerente de projetos está solicitando uma série de tarefas que eles não têm tempo de fazer devido às suas funções técnicas na empresa. Um consultor, que naquele local chegava, foi questionado por essas pessoas sobre o que ele achava desta situação. Ele achou estranho, porque uma das funções do gerente de projetos é repassar as atividades de maneira tal que todos possam realizá-las no prazo determinado. Sendo assim, ele pediu o cronograma e viu que estava tudo de acordo. Então, ele perguntou: “Quem tem o poder nesta empresa para dar direções a vocês sobre o que fazer?”, e um deles respondeu prontamente: “O nosso gerente que está ali!”. Com esta breve situação, qual deve ser a estrutura organizacional da empresa?",
                 resposta:"Alternativa “4”, Funcional. Pode-se perceber que os membros da equipe dão maior ênfase ao trabalho técnico do que o próprio projeto e, além disso, o gerente de projetos não possui autoridade", 
                 mark:false, vdd:false, per:"/sounds/per2.mp3", res:"/sounds/res2.mp3",oAlternativas: [
                     {alternativa:"1 - Matricial", vdd:false},
                     {alternativa:"2 - Projetizada", vdd:false},
                     {alternativa:"3 - Coordenação", vdd:false},
                     {alternativa:"4 - Funcional", vdd:true},
                 ]},
                {pergunta:"Carla, patrocinadora do projeto, solicita uma reunião ao Alexandre, gerente do projeto, para verificar o andamento. Alexandre se reúne com sua equipe e solicita uma série de informações. Quais informações terão maior relevância para o patrocinador?",
                 resposta:"Alternativa “3”. O patrocinador é a pessoa ou um grupo de dentro ou fora da organização executora que supre os recursos financeiros em dinheiro ou mercadorias/serviços necessários para a execução do projeto. Então, ele deverá acompanhar se o que foi planejado está sendo cumprido, pois caso contrário deverá suprir com mais recursos",
                 mark:false, vdd:false, per:"/sounds/per3.mp3", res:"/sounds/res3.mp3",oAlternativas: [
                     {alternativa:"1 -  Prazo do projeto", vdd:false},
                     {alternativa:"2 - O número de fornecedores", vdd:false},
                     {alternativa:"3 - O custo das máquinas e dos equipamentos necessários para a execução do projeto. ", vdd:true},
                     {alternativa:"4 - Se as pessoas estão motivadas com o projeto", vdd:false},
                 ]},
                {pergunta:"O que é o processo de um projeto?",
                 resposta:"Alternativa: 3 - Uma série de ações que geram um resultado.",
                 mark:false, vdd:false, per:"/sounds/per4.mp3", res:"/sounds/res4.mp3",oAlternativas: [
                     {alternativa:"1 - A criação de um produto ou serviço. ", vdd:false},
                     {alternativa:"2 - A elaboração progressiva resultando em um produto.", vdd:false},
                     {alternativa:"3 - Uma série de ações que geram um resultado", vdd:true},
                     {alternativa:"4 - Uma série de ações que permitem ao projeto avançar do conceito até o produto.", vdd:false},
                 ]},
                {pergunta:"Há cinco processos de gerenciamento de projetos que permitem que os projetos avancem do início à conclusão. Qual dos itens a seguir não é um dos grupos de processos do gerenciamento de projetos?",
                 resposta:"Alternativa:  3 - Comunicação.",
                 mark:false, vdd:false, per:"/sounds/per5.mp3", res:"/sounds/res5.mp3",oAlternativas: [
                     {alternativa:"1 - Inicio.", vdd:false},
                     {alternativa:"2 - Planejamento.", vdd:false},
                     {alternativa:"3 - Comunicação.", vdd:true},
                     {alternativa:"4 - Encerramento.", vdd:false},
                 ]},
                {pergunta:"Dos itens a seguir, qual é a ordem lógica dos processos de gerenciamento de projetos? ",
                 resposta:"Alternativa: 3 - Início, planejamento, execução, monitoração com controle, encerramento.",
                 mark:false, vdd:false, per:"/sounds/per6.mp3", res:"/sounds/res6.mp3",oAlternativas: [
                     {alternativa:"1 - Início, planejamento, monitoração e controle, execução.", vdd:false},
                     {alternativa:"2 - Planejamento, início, monitoração e controle, execução, encerramento.", vdd:false},
                     {alternativa:"3 - Início, planejamento, execução, monitoração com controle, encerramento.", vdd:true},
                     {alternativa:"4 - Planejamento, início, execução, encerramento.", vdd:false},
                 ]},
                {pergunta:"Qual dos itens a seguir não é um atributo de projeto?",
                 resposta:"Alternativa:  2 - Não ter data de término definida.",
                 mark:false, vdd:false, per:"/sounds/per7.mp3", res:"/sounds/res7.mp3",oAlternativas: [
                     {alternativa:"1 - Data de início definida.", vdd:false},
                     {alternativa:"2 - Não ter data de término definida.", vdd:true},
                     {alternativa:"3 - Criação de um produto, serviço ou resultados.", vdd:false},
                     {alternativa:"4 - Requer recursos.", vdd:false},
                 ]},
                {pergunta:"Os gerentes de projeto não são responsáveis por qual dos itens a seguir na maioria das empresas?",
                 resposta:"Alternativa: 2 - Selecionar os projetos a serem iniciados.",
                 mark:false, vdd:false, per:"/sounds/per8.mp3", res:"/sounds/res8.mp3",oAlternativas: [
                     {alternativa:"1 - Identificar os requisitos do projeto.", vdd:false},
                     {alternativa:"2 - Selecionar os projetos a serem iniciados.", vdd:true},
                     {alternativa:"3 - Equilibrar as demandas de tempo, custo, escopo e qualidade.", vdd:false},
                     {alternativa:"4 - Estabelecer objetivos de projeto claros e alcançáveis.", vdd:false},
                 ]},
                {pergunta:"Você é o gerente de um grande projeto de instalação de 1.900 quiosques no campus de universidades da América do Sul. O quiosque coletará inscrições para o uso de cartões de crédito, serviços telefônicos e outros serviços de interesse para alunos universitários. A parte principal de seu projeto enfocará a integração via tecnologia da informação, as conexões de rede remota de cada quiosque, a segurança dos dados transferidos e o banco de dados das informações coletadas. Para simplificar o gerenciamento você contratou fornecedores locais para a instalação dos quiosques que serão enviados a cada campus. Os fornecedores de cada campus serão responsáveis pela conexão de rede remota, pela conexão elétrica, pela segurança do quiosque e por todos os testes. O trabalho contratado localmente poderia ser chamado como? ",
                 resposta:"Alternativa: 2 - Operações.",
                 mark:false, vdd:false, per:"/sounds/per9.mp3", res:"/sounds/res9.mp3",oAlternativas: [
                     {alternativa:"1 - Redução de riscos.", vdd:false},
                     {alternativa:"2 - Operações.", vdd:true},
                     {alternativa:"3 - Subprojetos.", vdd:false},
                     {alternativa:"4 - Gerenciamento por projetos.", vdd:false},
                 ]},
                {pergunta:"Marcelo Henrique tem pouca experiência, mas foi admitido como gerente de projeto. Ele irá trabalhar numa empresa de estrutura matricial e, sendo assim, qual deve ser a expectativa dele quanto à comunicação? ",
                 resposta:"Alternativa: 3 - Numa empresa matricial, há mais de um gerente para a equipe de projetos se reportar (o gerente de projetos e o gerente funcional) e, ainda, o gerente funcional apresenta prioridades diferentes daquelas apresentadas pelo gerente de projetos, logo maior é a probabilidade para a duplicação de esforços e de conflitos de comunicação.",
                 mark:false, vdd:false, per:"/sounds/per10.mp3", res:"/sounds/res10.mp3",oAlternativas: [
                     {alternativa:"1 - Simples.", vdd:false},
                     {alternativa:"2 - Aberta e exata.", vdd:false},
                     {alternativa:"3 - Complexa.", vdd:true},
                     {alternativa:"4 - De fácil gerência.", vdd:false},
                 ]},
                {pergunta:"Dentre as opções abaixo, qual a que menos pode ser considerada um sintoma de que a equipe do projeto não está trabalhando efetivamente como um time?",
                 resposta:"Alternativa:1 - A moderna abordagem em relação à resolução de conflitos admite que um certo grau de conflito e competição pode ser benéfico, desde que conduzidos com maturidade pelos envolvidos. Nesse contexto, os mesmos podem ser importantes para o desenvolvimento da equipe, estimulando inovação e criatividade. O grande problema está relacionado à ocorrência exagerada de conflitos e competições, bem como à falta de maturidade dos envolvidos ao lidar com os mesmos. Esse cenário é prejudicial ao desenvolvimento da equipe, constituindo um forte indício de problemas que podem causar impacto no desenvolvimento do projeto.",
                 mark:false, vdd:false, per:"/sounds/per11.mp3", res:"/sounds/res11.mp3",oAlternativas: [
                     {alternativa:"1 - Conflito e competição.", vdd:true},
                     {alternativa:"2 - Frustração.", vdd:false},
                     {alternativa:"3 - Falta de confiança no gerente do projeto.", vdd:false},
                     {alternativa:"4 - Reuniões improdutivas.", vdd:false},
                 ]},
                {pergunta:"12 No início do projeto um gerente descobre um problema em uma determinada atividade. Ele também fica sabendo que um membro da equipe que não fazia parte dessa atividade já havia previsto o problema há algum tempo, mas não alertou a equipe. Diante deste cenário, a alternativa que melhor representa o comportamento do gerente do projeto em relação à equipe do projeto é:",
                 resposta:"Alternativa: 3 - O cenário apresentado revela indícios de uma situação típica de início de projeto, onde em geral a equipe ainda não possui um bom entrosamento, e pode ser comum algumas pessoas terem receio de opinar sobre atividades nas quais não estão alocadas. Devido a isso, o gerente do projeto deve iniciar as atividades de integração da equipe desde o início do projeto, para facilitar o entrosamento da mesma. Sendo assim, é papel do gerente do projeto, dentre outros, alertar a sua equipe para a importância do comprometimento individual e coletivo dos seus membros, bem como obter de todos esse comprometimento ",
                 mark:false, vdd:false, per:"/sounds/per12.mp3", res:"/sounds/res12.mp3",oAlternativas: [
                     {alternativa:"1 - Punir esse membro porque ele deveria ter avisado sobre o problema.", vdd:false},
                     {alternativa:"2 - Não punir o membro da equipe porque a atividade não estava sob a responsabilidade do mesmo.", vdd:false},
                     {alternativa:"3 - Reunir a equipe, no sentido de obter maior nível de comprometimento individual e coletivo.", vdd:true},
                     {alternativa:"4 - Esquecer esse detalhe e focar na resolução do problema.", vdd:false},
                 ]},
            ];

            $scope.atividades = oAtividade;
            $scope.partida = oPartida;

            $scope.iPartida();
        };


        /**
         *inicia uma partida
         */
        $scope.iPartida = function(){
            console.log("proxima");
            $scope.partida.alert = false;
            $scope.partida.option = null;
            $scope.atividade = $scope.atividades[$scope.partida.progresso];
            if(($scope.partida.progresso + 1) <= $scope.atividades.length){
                $scope.partida.progresso++;
                //<voice-player id="vPergunta" accent="es-ES" text="{{atividade.pergunta}}"></voice-player>
                //document.querySelector('#vPergunta').speak();
                //document.getElementById("somPrincipal").play();
                setTimeout(function(){
                    $scope.oController.sound = $scope.atividade.per;
                    $scope.$apply();
                },2000);
            }else{
                console.log("acabo");
                $scope.oController.msg = "Você fez um total de "+$scope.atividades.length+" atividades, acertou "+$scope.partida.acertos+ "e errou "+$scope.partida.erros+". Você retorno para a página principal.";
                $scope.oController.action = null;
                document.querySelector('#vPergunta').speak();
                setTimeout(function(){
                },500);
            }
            //setTimeout(function(){ $scope.$apply(); }, 100);

        };

        $scope.confirm = function(){
            if($scope.partida.alert && $scope.partida.alert != 2){
                return;
            }
            if(!$scope.partida.option){
                $scope.partida.alert = 2;
                return;
            }                
            if($scope.atividade.oAlternativas[$scope.partida.option-1].vdd){
                $scope.partida.alert = 1;
                $scope.partida.acertos = $scope.partida.acertos + 1;
                $scope.partida.pAcertos = Math.ceil($scope.partida.acertos*100/$scope.atividades.length);
                $scope.partida.pErros = Math.ceil($scope.partida.erros*100/$scope.atividades.length);
                $scope.partida.pProgresso = Math.ceil($scope.partida.progresso*100/$scope.atividades.length);
                $scope.oController.msg = "Parabéns você acertou!!";
                document.querySelector('#vPergunta').speak();
                setTimeout(function(){ $scope.iPartida(); }, 3000);
            }else{
                $scope.partida.resposta = $scope.atividade.resposta;
                $scope.partida.alert = 3;
                $scope.partida.erros = $scope.partida.erros + 1;
                $scope.partida.pAcertos = Math.ceil($scope.partida.acertos*100/$scope.atividades.length);
                $scope.partida.pErros = Math.ceil($scope.partida.erros*100/$scope.atividades.length);
                $scope.partida.pProgresso = Math.ceil($scope.partida.progresso*100/$scope.atividades.length);
                $scope.oController.sound = $scope.atividade.res;
                document.getElementById("somPrincipal").play();
                //setTimeout(function(){
                //$scope.$apply();
                //},10);
                setTimeout(function(){ $scope.iPartida(); }, 30000);
            }
        };

        $scope.copyConteudo = function(ind){
            $scope.conteudoA.link = $scope.conteudos[ind].link;
            $scope.conteudoA.title = $scope.conteudos[ind].title;
            $scope.oController.sound = $scope.conteudos[ind].som;
            document.getElementById("somPrincipal").play();

        };

        $scope.sound = function(){
            console.log("teste");
            if($scope.oController.som)
                document.getElementById("somPrincipal").play();
            else
                document.getElementById("somPrincipal").pause();
        };
    }]);