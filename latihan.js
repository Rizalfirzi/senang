Vue.component('KomponenCard', {
    props: ['nama', 'whatsapp'],
    template: `
        <div style="margin-top: 20px;">
            <div class="card" style="width:400px">
                <img class="card-img-top" src="img/img_avatar1.png" style="width:100%">
                <div class="card-body">
                <h4 class="card-title">{{ nama }}</h4>
                <p class="card-text"><slot></slot></p>
                <button type="button" class="btn btn-primary" @click="tampilkanModal()">Tampilkan Modal</button>
                </div>
            </div>
            <komponen-modal :title=nama :body=whatsapp @tutup="displayModal = 'none'" :displayStatus=displayModal></komponen-modal>
        </div>
    `,
    data() {
        return {
            displayModal: 'none'
        }
    },
    methods: {
        tampilkanModal() {
            this.displayModal = 'block';
        }
    }
});

Vue.component('KomponenModal', {
    props: {
        title: '',
        body: '',
        displayStatus: {
            default: 'none' 
        }
    },
    template: `
        <div class="modal fade show" :style="{ display:displayStatus }">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                
                    <div class="modal-header">
                        <h4 class="modal-title">{{ title }}</h4>
                        <button type="button" class="close" @click="$emit('tutup')">×</button>
                    </div>
                    
                    <div class="modal-body">
                        Saya dapat dihubungi via WA {{ body }}
                    </div>
                    
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="$emit('tutup')">Tutup Modal</button>
                    </div>
                    
                </div>
            </div>
        </div>     
    `
});
new Vue ({    
    el: '#app',
    data: {
        showCard: false 
    }
});