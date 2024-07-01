<template>
    <!-- Create a confirmation dialog for deletion -->
    <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" class="mt-2 mb-4" color="red" text="DELETE ALL COSTS"></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="Deletion Confirmation">
                <v-card-text>
                    Are you sure you want to delete ALL costs?
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="red" text @click="removeAllCosts(), isActive.value = false">Delete</v-btn>
                    <v-btn text="Close" @click="isActive.value = false"></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script lang="ts">
import { useBudgetStore } from '@/stores/budget';

export default {
    data() {
        return {
            budget: useBudgetStore()
        };
    },
    methods: {
        /**
         * Remove all costs from the budget.
         */
        removeAllCosts() {
            this.budget.clearCosts();
        },
    },
};
</script>