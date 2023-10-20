---
description: Comandos ambientes virtuais
---

# VENV

Aqui está um mini guia com comandos básicos sobre ambientes virtuais em Python, usando a ferramenta `virtualenv`. Ambientes virtuais são úteis para isolar dependências de diferentes projetos, permitindo que você mantenha diferentes versões de bibliotecas Python para cada projeto.

1.  **Instalar o virtualenv** (se ainda não estiver instalado):

    ```
    pip install virtualenv
    ```
2.  **Criar um ambiente virtual:**

    ```
    virtualenv nome_do_ambiente
    ```

    Substitua `nome_do_ambiente` pelo nome que você deseja dar ao ambiente.
3.  **Ativar o ambiente virtual:**

    No Windows (cmd):

    ```
    nome_do_ambiente\Scripts\activate
    ```

    No Windows (PowerShell):

    ```
    .\nome_do_ambiente\Scripts\Activate.ps1
    ```

    No macOS e Linux:

    ```
    source nome_do_ambiente/bin/activate
    ```

    Após ativar o ambiente, você verá o nome dele no prompt de comando, indicando que está ativo.
4.  **Desativar o ambiente virtual:**

    ```
    deactivate
    ```

    Isso restaurará o ambiente Python padrão.
5.  **Instalar pacotes no ambiente virtual:** Após ativar o ambiente, você pode usar `pip` para instalar pacotes, e eles serão isolados no ambiente virtual.

    ```
    pip install nome_do_pacote
    ```
6.  **Listar pacotes instalados no ambiente virtual:**

    ```
    pip freeze
    ```
7.  **Exportar a lista de pacotes para um arquivo:** Isso é útil para compartilhar os requisitos do seu projeto com outras pessoas.

    ```
    pip freeze > requirements.txt
    ```
8.  **Criar um ambiente virtual a partir de um arquivo de requisitos:**

    ```
    virtualenv -p python3 nome_do_ambiente
    source nome_do_ambiente/bin/activate
    pip install -r requirements.txt
    ```
9. **Remover um ambiente virtual:** Para remover um ambiente virtual, simplesmente exclua a pasta que o contém.

Lembre-se de que você deve criar um ambiente virtual separado para cada projeto Python, para evitar conflitos de dependências. Ambientes virtuais facilitam a gestão de dependências e garantem que seus projetos funcionem de forma isolada uns dos outros.
