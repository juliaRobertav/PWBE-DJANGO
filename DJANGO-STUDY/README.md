# COMANDOS

Certifique-se de criar e ativar um ambiente virtual antes de seguir estas etapas.



#### Ambientes Virtuais:

{% embed url="https://docs.python.org/pt-br/3/tutorial/venv.html" %}

{% embed url="https://docs.python.org/pt-br/3/library/venv.html" %}

Caso ainda queira saber mais, vá até a aba <mark style="background-color:red;">VENV</mark>.



**Passo 1: Instalar o Django**

Para iniciar, você precisa instalar o Django em seu ambiente de desenvolvimento. Você pode fazer isso usando o pip, o gerenciador de pacotes do Python:

```bash
pip install django
```

**Passo 2: Criar um novo projeto Django**

Agora, você pode criar um novo projeto Django com o seguinte comando:

```bash
django-admin startproject nomedoseuprojeto
```

Substitua "nomedoseuprojeto" pelo nome que desejar para seu projeto.

**Passo 3: Criar um aplicativo Django**

Dentro de um projeto Django, você pode criar vários aplicativos. Cada aplicativo é uma parte modular do seu projeto. Use o seguinte comando para criar um novo aplicativo:

```bash
cd nomedoseuprojeto
python manage.py startapp nomedoaplicativo
```

**Passo 4: Configurar o Banco de Dados**

Django permite que você escolha o banco de dados que deseja usar. O SQLite é o banco de dados padrão para projetos pequenos. Para configurar um banco de dados diferente, você pode modificar as configurações no arquivo `settings.py` do seu projeto.

**Passo 5: Criar o Banco de Dados**

Depois de configurar o banco de dados, você precisa criar as tabelas definidas em seus modelos com o seguinte comando:

```bash
python manage.py migrate
```

**Passo 6: Criar um Superusuário**

Para acessar a área de administração do Django, você precisa criar um superusuário com o comando:

```bash
python manage.py createsuperuser
```

**Passo 7: Desenvolver suas Modelos e Views**

Agora, você pode começar a criar modelos para seus dados e as views para controlar como os dados são exibidos.

**Passo 8: Criar URLs**

Defina as URLs do seu aplicativo em um arquivo `urls.py` e conecte-as às views correspondentes.

**Passo 9: Criar Templates**

Desenvolva os templates HTML para sua aplicação e defina como os dados são exibidos.

**Passo 10: Executar o Servidor de Desenvolvimento**

Para testar seu projeto, você pode executar o servidor de desenvolvimento com o seguinte comando:

```bash
python manage.py runserver
```

Agora, você pode acessar seu projeto em um navegador em `http://127.0.0.1:8000/`.

Este é um guia introdutório para começar com o Django.

Caso queira saber mais, na aba <mark style="background-color:red;">DICAS</mark> contém alguns links com documentações e maiores explicações.



