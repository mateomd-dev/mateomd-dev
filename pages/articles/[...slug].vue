<template>
    <div>
        <ContentDoc v-slot="{ doc }">
            <div class="row justify-content-center">
                <h1 class="display-5 text-center mt-4 mb-3">{{ doc.title }}</h1>
                <p class="small text-muted text-center mb-5">{{ dateTime(doc.created_at) }}</p>
                <hr class="mb-3">
                <ContentRenderer :value="doc" class="col-12 col-md-10 col-lg-8"/>
            </div>
        </ContentDoc>
    </div>
</template>

<script lang="ts">
import moment from 'moment';

export default {
    setup() {
        function dateTime(value: string) {
            return moment(value).format('MMMM D, YYYY')
        }

        return {
            dateTime
        }
    }
}

</script>
