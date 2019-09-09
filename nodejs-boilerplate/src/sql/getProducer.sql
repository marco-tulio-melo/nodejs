select
  id,
  name
from
  product
where
  1 = 1
  {{#filter_id}}
  and id = :filter_id
  {{/filter_id}}
  {{#filter_name}}
  and name like concat('%', :filter_name, '%')
  {{/filter_name}}
