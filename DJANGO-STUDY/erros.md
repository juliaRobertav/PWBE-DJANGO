---
description: Comandos específicos para erros que tive
---

# Erros

É comum dar erros no django devido a algumas alterações que fazemos, principalmente com makemigrations e migrate, por isso vou colocar alguns específicos de alguns casos que ja tive!





1. Remover Migração Atual

Se você já tentou aplicar migrações que resultaram em erros, considere reverter essas migrações para o estado anterior e, em seguida, aplicar as migrações novamente após corrigir os dados no banco de dados.

```django
python manage.py migrate <app_name> <migration_name>
```

Caso não saiba o nome da migração anterior:

```django
python manage.py showmigrations
```

A lista será basicamente assim:

```django
[ ] 0001_initial
[ ] 0002_add_field_to_model
[ ] ...

```

Depois disso:

* Escolha a migração para a qual deseja reverter. Vamos assumir que você deseja reverter para a migração `0002_add_field_to_model`.
* Execute o comando `migrate` com o nome da aplicação e o nome da migração desejada:

```django
python manage.py migrate <app_name> 0002_add_field_to_model
```

Após reverter as migrações, você pode corrigir os dados no banco de dados e, em seguida, aplicar novamente as migrações:

```django
python manage.py makemigrations
python manage.py migrate
```

Além disso, se você não tiver uma migração intermediária entre a migração atual e a anterior que você deseja reverter, você pode criar uma nova migração que representa o estado intermediário. Isso pode ser feito usando o seguinte comando:

```django
python manage.py makemigrations <app_name>
```

Caso queira remover uma migração pode apagá-la manualmente, mas se fizer isso é importante checar no banco de dados também e depois não esquecer de aplicar novamente as migrações!

Mas caso queira fazer de outra forma aqui vai um passo a passo:

1.  **Listar Migrações:** Utilize o comando `showmigrations` para listar todas as migrações disponíveis e identificar a que você deseja remover.

    ```bash
    python manage.py showmigrations
    ```
2.  **Desfazer Migrações até a Migração Anterior:** Utilize o comando `migrate` com o nome da sua aplicação e o nome da migração anterior àquela que deseja remover.

    ```bash
    python manage.py migrate app_name migration_name
    ```

    Por exemplo, se você deseja remover a migração '0014\_some\_migration', você pode executar:

    ```bash
    python manage.py migrate app_name 0013_previous_migration
    ```

    Certifique-se de substituir 'app\_name' pelo nome real da sua aplicação e '0013\_previous\_migration' pela migração anterior àquela que deseja remover.
3. **Excluir o Arquivo de Migração Manualmente:** Vá até o diretório `migrations` dentro da sua aplicação e exclua o arquivo de migração que você deseja remover. O arquivo terá um nome como '0014\_some\_migration.py'.
4.  **Remover o Registro no Banco de Dados:** Se a migração removida já foi aplicada ao banco de dados, você também pode precisar remover os registros relacionados a essa migração da tabela `django_migrations` no banco de dados.

    ```sql
    DELETE FROM django_migrations WHERE app='app_name' AND name='0014_some_migration';
    ```

    Certifique-se de substituir 'app\_name' pelo nome real da sua aplicação e '0014\_some\_migration' pelo nome da migração que você removeu.

Lembre-se de que a remoção de migrações é uma tarefa sensível e pode levar à perda de dados. Certifique-se de ter backups adequados antes de realizar qualquer ação significativa no banco de dados. Além disso, esteja ciente de que, se outras migrações dependerem daquela que você está removendo, você pode encontrar problemas. Portanto, use esta abordagem com cautela e compreensão completa das consequências.
