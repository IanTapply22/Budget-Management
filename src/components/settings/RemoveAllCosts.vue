<template>
    <!-- Create a confirmation dialog for deletion -->
    <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
            <v-row class="justify-center mt-2">
                <v-btn v-bind="activatorProps" class="mt-2 mb-4" color="red" text="DELETE ALL COSTS"
                    height="60"></v-btn>
            </v-row>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="Deletion Confirmation">
                <v-card-text>
                    Are you sure you want to delete ALL costs?
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="red" text @click="budget.clearCosts(), isActive.value = false">Delete</v-btn>
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
    }
};
</script>