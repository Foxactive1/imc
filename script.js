
        // Seleção de elementos
        const form = document.getElementById('imcForm');
        const pesoInput = document.getElementById('peso');
        const alturaInput = document.getElementById('altura');
        const resultado = document.getElementById('resultado');
        const imcValor = document.getElementById('imcValor');
        const imcClassificacao = document.getElementById('imcClassificacao');
        const pesoError = document.getElementById('pesoError');
        const alturaError = document.getElementById('alturaError');

        // Tema escuro/claro
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('.theme-icon');
        let isDarkTheme = false;

        themeToggle.addEventListener('click', () => {
            isDarkTheme = !isDarkTheme;
            document.body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
            themeIcon.textContent = isDarkTheme ? '☀️' : '🌙';
        });

        // Função principal de cálculo do IMC
        function calcularIMC(peso, altura) {
            const imc = peso / (altura * altura);
            return Number(imc.toFixed(2)); // 2 casas decimais como no seu código
        }

        // Função para determinar a classificação
        function getClassificacao(imc) {
            if (imc >= 40) return 'Obesidade extrema III';
            if (imc >= 35) return 'Obesidade II';
            if (imc >= 30) return 'Obesidade I';
            if (imc >= 25) return 'Excesso de peso';
            if (imc >= 18.5) return 'Normal';
            return 'Baixo peso';
        }

        // Validação e cálculo
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Reset dos erros
            pesoError.style.display = 'none';
            alturaError.style.display = 'none';
            
            const peso = parseFloat(pesoInput.value);
            const altura = parseFloat(alturaInput.value);
            
            // Validação mais detalhada
            let hasError = false;
            
            if (!peso || peso <= 0) {
                pesoError.style.display = 'block';
                hasError = true;
            }
            
            if (!altura || altura <= 0) {
                alturaError.style.display = 'block';
                hasError = true;
            }
            
            if (hasError) return;

            // Cálculo e exibição
            const imc = calcularIMC(peso, altura);
            const classificacao = getClassificacao(imc);
            
            imcValor.textContent = `Seu IMC é: ${imc}`;
            imcClassificacao.textContent = `A sua classificação é: ${classificacao}`;
            resultado.style.display = 'block';
        });
