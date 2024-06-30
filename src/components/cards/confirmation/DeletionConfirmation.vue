<template>
    <v-dialog v-if="enabled">
        <v-card>
            <v-card-title>Delete Confirmation</v-card-title>
            <v-card-text>
                Are you sure you want to delete this item?
            </v-card-text>
            <v-card-actions>
                <v-btn @click="enabled = false">Cancel</v-btn>
                <v-btn @click="enabled = false, deletion()">Delete</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        enabled: {
            type: Boolean,
            required: true,
        },
        deletion: {
            type: Function,
            required: true,
        },
    }
}
</script>