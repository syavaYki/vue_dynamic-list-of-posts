<script setup>
const props = defineProps(['active', 'posts'])
const emit = defineEmits(['open', 'close', 'create'])
</script>

<template>
  <div>
    <div className="tile is-parent">
      <div className="tile is-child box is-success">
        <div className="block">
          <div className="block is-flex is-justify-content-space-between">
            <p className="title">Posts</p>
            <button type="button" className="button is-link" @click="emit('create')">
              Add New Post
            </button>
          </div>

          <table className="table is-fullwidth is-striped is-hoverable is-narrow">
            <thead>
              <tr className="has-background-link-light">
                <th>ID</th>
                <th>Title</th>
                <th className="has-text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="post of posts" :key="post.id">
                <td>{{ post?.id }}</td>

                <td>{{ post.title }}</td>

                <td className="has-text-right is-vcentered">
                  <button
                    v-if="props.active === post.id && props.active"
                    type="button"
                    className="button is-link"
                    @click="emit('close')"
                  >
                    Close
                  </button>

                  <button
                    v-else
                    type="button"
                    className="button is-link"
                    @click="emit('open', post.id)"
                  >
                    Open
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
