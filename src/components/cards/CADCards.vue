<template>
    <div v-for="cost in budget.cadCosts" :key="cost.id">
        <!-- Create cards for CAD costs -->
        <v-card width="400" class="ml-4 mt-4">
            <v-card-title>
                <h2>{{ cost.name }} (ID: {{ cost.id }})</h2>
            </v-card-title>
            <v-card-text>
                <h4 class="font-weight-light mb-2">{{ cost.description }}</h4>
                <h3 class="font-weight-medium">Cost: {{ cost.amount }} CAD</h3>
                <h3 class="font-weight-medium">Shipping Cost: {{ cost.shippingCost }} CAD</h3>
                <h3 class="font-weight-medium">Taxed Dollars: {{ budget.calculateCadItemTax(cost) }} CAD</h3>
                <h3 class="font-weight-medium">Item Total After Tax: {{ budget.calculateCadItemTotal(cost) }} CAD
                </h3>
                <h3 class="font-weight-medium">USD Conversion: {{
        budget.convertToUsd(budget.calculateUsdItemTotal(cost)) }}
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

                                <v-btn color="red" text @click="deleteCadCost(cost.id), isActive.value = false">Delete</v-btn>
                                <v-btn text="Close" @click="isActive.value = false"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
            </v-card-text>
        </v-card>
    </div>
</template>

<script lang="ts">
import { useBudgetStore } from '@/stores/budget';

export default {
    data() {
        return {
            budget: useBudgetStore(),
        }
    },
    methods: {
        /**
         * Delete a CAD cost from the budget store.
         */
        deleteCadCost(id: number) {
            this.budget.removeCadCost(id);
        },
    }
}
</script>