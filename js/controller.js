angular.module('gerPro', [])
    .controller('GerProController', ['$scope', function($scope) {

        /**
         *Objetos principais
        **/
        $scope.oController = {action: null,option: undefined, module:undefined, som: true, sound:"/sounds/audio1.mp3"};
        $scope.atividades = [];
        $scope.atividade = {};
        $scope.conteudos = [
            {title: "Gerência de Projetos - Introdução", link:"/pages/gpIntro.html"},
            {title: "Gestão de projetos na prática", link:"/pages/gpPratica.html"},
            {title: "Anatomia de um projeto", link:"/pages/gpAnatomia.html"},
            {title: "Abordagens em gestão de projeto", link:"/pages/gpAbordagem.html"},

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
                            document.querySelector('#vPergunta').speak();
                        },500);
                    }else{
                        console.log("option 4");
                        $scope.conteudoA.option = 3;
                        $scope.oController.msg = $scope.conteudos[3].title;
                        setTimeout(function(){
                            $scope.$apply();
                            document.querySelector('#vPergunta').speak();
                        },500);
                    }
                    break;
                case 65: //A
                    if($scope.oController.action !== null) return;
                    console.log("A - atividade");
                    $scope.oController.msg = "Atividades";
                    setTimeout(function(){
                        $scope.oController.action = 1;
                        document.querySelector('#vPergunta').speak();
                        $scope.$apply();
                        $scope.init();
                    },500);
                    break;
                case 72: //H
                    console.log("H - Ajuda");
                    $scope.oController.sound = "/sounds/ajuda.mp3";
                    setTimeout(function(){
                        $scope.$apply();
                        document.getElementById("somPrincipal").play();
                    },500);
                    break;
                case 80: //P
                    if($scope.oController.action !== 1) return;
                    console.log("p - progresso");
                    $scope.oController.msg = "Você fez até agora "+($scope.partida.progresso -1) +" atividades de um total de "+$scope.atividades.length+", acertou "+$scope.partida.acertos+ "e errou "+$scope.partida.erros;
                    setTimeout(function(){
                        $scope.$apply();
                        document.querySelector('#vPergunta').speak();
                    },500);
                    break;
                case 82: //R
                    console.log("R - repetir atividade");
                    break;
                case 67:
                    if($scope.oController.action != null) return;
                    console.log("C - Conteudo");
                    $scope.conteudoA = {option:undefined, link: undefined, title: undefined};
                    $scope.oController.msg = "Conteúdo";
                    setTimeout(function(){
                        $scope.oController.action = 2;
                        document.querySelector('#vPergunta').speak();
                        $scope.$apply();
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
                    document.getElementById("somPrincipal").pause();
                    document.querySelector('#vPergunta').cancel();
                    $scope.oController.sound = null;
                    break;
                case 90: //Z
                    console.log("Z");
                    if($scope.oController.action == 2){
                        $scope.conteudoA.option = undefined;
                        $scope.oController.module = false;
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
                 resposta:"Alternativa “b”, Proativo. Como este projeto possui vários fornecedores a rede de comunicação envolvida é muito complexa, devendo o gerente de projetos tomar uma série de iniciativas preventivas para baixar custo, verificar a qualidade dos serviços prestados pelos fornecedores e o tempo de entrega dos mesmos", 
                 mark:false, vdd:false, oAlternativas: [
                     {alternativa:"1 - Técnico", vdd:false},
                     {alternativa:"2 - Proativo", vdd:true},
                     {alternativa:"3 - Expeditor", vdd:false},
                     {alternativa:"4 - Calmo", vdd:false},
                 ]},
                {pergunta:"Os membros de uma equipe de projetos reclamam entre si que o gerente de projetos está solicitando uma série de tarefas que eles não têm tempo de fazer devido às suas funções técnicas na empresa. Um consultor, que naquele local chegava, foi questionado por essas pessoas sobre o que ele achava desta situação. Ele achou estranho, porque uma das funções do gerente de projetos é repassar as atividades de maneira tal que todos possam realizá-las no prazo determinado. Sendo assim, ele pediu o cronograma e viu que estava tudo de acordo. Então, ele perguntou: “Quem tem o poder nesta empresa para dar direções a vocês sobre o que fazer?”, e um deles respondeu prontamente: “O nosso gerente que está ali!”. Com esta breve situação, qual deve ser a estrutura organizacional da empresa?",
                 resposta:"Alternativa “d”, Funcional. Pode-se perceber que os membros da equipe dão maior ênfase ao trabalho técnico do que o próprio projeto e, além disso, o gerente de projetos não possui autoridade", 
                 mark:false, vdd:false, oAlternativas: [
                     {alternativa:"1 - Matricial", vdd:false},
                     {alternativa:"2 - Proativo", vdd:false},
                     {alternativa:"3 - O custo das máquinas e dos equipamentos \nnecessários para a execução do projeto", vdd:true},
                     {alternativa:"4 - Se as pessoas estão motivadas com o projeto", vdd:false},
                 ]},
                {pergunta:"Carla, patrocinadora do projeto, solicita uma reunião ao Alexandre, gerente do projeto, para verificar o andamento. Alexandre se reúne com sua equipe e solicita uma série de informações. Quais informações terão maior relevância para o patrocinador?",
                 resposta:"Alternativa “3”. O patrocinador é a pessoa ou um grupo de dentro ou fora da organização executora que supre os recursos financeiros em dinheiro ou mercadorias/serviços necessários para a execução do projeto. Então, ele deverá acompanhar se o que foi planejado está sendo cumprido, pois caso contrário deverá suprir com mais recursos",
                 mark:false, vdd:false, oAlternativas: [
                     {alternativa:"1 -  Prazo do projeto", vdd:false},
                     {alternativa:"2 - O número de fornecedores", vdd:false},
                     {alternativa:"3 - Coordenação", vdd:false},
                     {alternativa:"4 - Funcional", vdd:true},
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
            }else{
                console.log("acabo");
                $scope.oController.msg = "Você fez um total de "+$scope.atividades.length+" atividades, acertou "+$scope.partida.acertos+ "e errou "+$scope.partida.erros+". Você retorno para a página principal.";
                $scope.oController.action = null;
                setTimeout(function(){
                    $scope.$apply();
                    document.querySelector('#vPergunta').speak();
                },500);
            }
            setTimeout(function(){ $scope.$apply(); }, 100);

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
                setTimeout(function(){ $scope.iPartida(); }, 3000);
            }else{
                $scope.partida.resposta = $scope.atividade.resposta;
                $scope.partida.alert = 3;
                $scope.partida.erros = $scope.partida.erros + 1;
                $scope.partida.pAcertos = Math.ceil($scope.partida.acertos*100/$scope.atividades.length);
                $scope.partida.pErros = Math.ceil($scope.partida.erros*100/$scope.atividades.length);
                $scope.partida.pProgresso = Math.ceil($scope.partida.progresso*100/$scope.atividades.length);
                setTimeout(function(){ $scope.iPartida(); }, 3000);
            }
        };

        $scope.copyConteudo = function(ind){
            $scope.conteudoA.link = $scope.conteudos[ind].link;
            $scope.conteudoA.title = $scope.conteudos[ind].title;
        };

        $scope.sound = function(){
            console.log("teste");
            if($scope.oController.som)
                document.getElementById("somPrincipal").play();
            else
                document.getElementById("somPrincipal").pause();
        };
    }]);