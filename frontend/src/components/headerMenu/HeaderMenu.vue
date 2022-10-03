<template>
  <Row justify="space-between">
    <Col flex="1">
      <Button type="primary">
        course 1
      </Button>
    </Col>
    <Col>
      <Button type="primary">
        course 2
      </Button>
    </Col>
    <Col>
      <Button type="primary">
        course 3
      </Button>
    </Col>
    <Col>
      <Button type="primary">
        course 4
      </Button>
    </Col>
  </Row>
</template>
<script lang="ts">
import { Button, Col, Row } from 'ant-design-vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderMenu',
  components: {
    Button, Col, Row,
  },
});

</script>
