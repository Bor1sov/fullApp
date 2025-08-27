# Области хранения данных:
- база данных (json-server)
- BFF
- redux store

# Сущности приложения:
- пользователь: БД (список пользователей), BFF (сессия текущего пользователя), store ( отображение в браузере).
- роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), store (использование на клиенте),
- статья: БД (список статей), store (отображение в браузере)
- комментарии: БД (список комментариев), store (отображение в браузере)

# Таблицы БД:

- пользователи - users: id / login / password / registed_at / role_id
- роли - roles: id / name
- статьи - posts: id / title / image_url / content / published_at
- комментарии - coments: id / author_id / post_id / content

# Схема состояния на BFF

- сессия текущего пользователя: login / password / role

# Схема для REDUX store (на клиенте):

- user: id / login / role_id / session
- posts: array post: id / title / imageUrl / publishedAt / commentsCount
- post: id / title / imageUrl / content / publishedAt / comments: array comment: id / author / content / publishedAt
- users: arraay user: id / login / registredAt / role
