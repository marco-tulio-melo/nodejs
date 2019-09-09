select
  name,
  email
from
  users
{{#id}}
where
  id = :id
{{/id}}
