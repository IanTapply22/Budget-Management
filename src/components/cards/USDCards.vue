<template>
    <!-- Create cards for USD costs -->
    <v-card v-for="cost in budget.usdCosts" :key="cost.id" width="400" rounded class="ml-4 mt-4">
        <v-card-title>
            <h2>{{ cost.name }} (ID: {{ cost.id }})</h2>
        </v-card-title>
        <v-card-text>
            <h4 class="font-weight-light mb-2">{{ cost.description }}</h4>
            <h3 class="font-weight-medium">Cost: {{ cost.amount }} USD</h3>
            <h3 class="font-weight-medium">Shipping Cost: {{ cost.shippingCost }} USD</h3>
            <h3 class="font-weight-medium">Taxed Dollars: {{ budget.calculateUSDItemTax(cost) }} USD</h3>
            <h3 class="font-weight-medium">Item Total After Tax: {{ budget.calculateUSDItemTotal(cost) }} USD</h3>
            <h3 class="font-weight-medium">CAD Conversion: {{ budget.convertToCAD(budget.calculateUSDItemTotal(cost)) }}
                CAD
            </h3>

            <!-- Create a confirmation dialog for deletion -->
            <v-dialog max-width="500">
                <template v-slot:activator="{ props: activatorProps }">
                    <v-btn v-bind="activatorProps" class="mt-2" color="red" text="Delete"></v-btn>
                </template>

                <template v-slot:default="{ isActive }">
                    <v-card title="Deletion Confirmation">
                        <v-card-text>
                            Are you sure you want to delete this cost? (ID: {{ cost.id }})
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn color="red" text
                                @click="deleteUSDCost(cost.id), isActive.value = false">Delete</v-btn>
                            <v-btn text="Close" @click="isActive.value = false"></v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { useBudgetStore } from '@/stores/budget';

export default {
    data() {
        return {
            budget: useBudgetStore()
        }
    },
    methods: {
        /**
         * Delete a USD cost from the budget store.
         */
        deleteUSDCost(id: number) {
            this.budget.removeUSDCost(id);
        }
    },
}
</script>