<template>
    <v-col class="ml-2" cols="12" md="12">
        <v-row>
            <v-col>
                <v-card width="100%">
                    <v-card-title>
                        <h2>Create USD Cost</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field v-model="usdName" label="Name" required></v-text-field>
                            <v-number-input v-model="usdAmount" label="Amount (USD)" required :min=0></v-number-input>
                            <v-number-input v-model="usdShippingCost" label="Shipping Cost (USD)" required
                                :min=0></v-number-input>
                            <v-btn @click="createUsdCost()" color="primary">
                                Create
                            </v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col class="mr-4">
                <v-card width="100%">
                    <v-card-title>
                        <h2>Create CAD Cost</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field v-model="cadName" label="Name" required></v-text-field>
                            <v-number-input v-model="cadAmount" label="Amount (CAD)" required :min=0></v-number-input>
                            <v-number-input v-model="cadShippingCost" label="Shipping Cost (CAD)" required
                                :min=0></v-number-input>
                            <v-btn @click="createCadCost()" color="primary">
                                Create
                            </v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="ml-3 mt-12">
            <v-row>
                <v-card v-for="cost in budget.usdCosts" :key="cost.name">
                    <v-card-title>
                        <h2>{{  cost.name }}</h2>
                    </v-card-title>
                    <v-card-text>
                        <p>{{ cost.name }}</p>
                        <p>{{ cost.amount }}</p>
                        <p>{{ cost.shippingCost }}</p>
                    </v-card-text>
                </v-card>
            </v-row>
            <v-row>
                <v-card v-for="cost in budget.cadCosts" :key="cost.name">
                    <v-card-title>
                        <h2>{{  cost.name }}</h2>
                    </v-card-title>
                    <v-card-text>
                        <p>{{ cost.name }}</p>
                        <p>{{ cost.amount }}</p>
                        <p>{{ cost.shippingCost }}</p>
                    </v-card-text>
                </v-card>
            </v-row>
        </v-row>
    </v-col>
</template>

<script>
import { useBudgetStore } from '@/stores/budget';

export default {
    data() {
        return {
            budget: useBudgetStore(),
            usdName: '',
            cadName: '',
            usdAmount: 0,
            cadAmount: 0,
            usdShippingCost: 0,
            cadShippingCost: 0,
        }
    },
    methods: {
        createUsdCost() {
            this.budget.addUsdCost({
                name: this.usdName,
                amount: this.usdAmount,
                shippingCost: this.usdShippingCost,
            });
        },
        createCadCost() {
            this.budget.addCadCost({
                name: this.cadName,
                amount: this.cadAmount,
                shippingCost: this.cadShippingCost,
            });
        },
        reset() {
            this.usdName = '';
            this.usdAmount = 0;
            this.usdShippingCost = 0;
        }
    }
}
</script>