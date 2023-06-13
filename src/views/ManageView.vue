<template>
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <app-upload ref="upload" />
      </div>
      <div class="col-span-2">
        <div class="bg-white rounded border border-gray-200 relative flex flex-col">
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">My Songs</span>
            <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
          </div>
          <div class="p-6">
            <composition-item v-for="song in songs" :key="song.docId" :song="song"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import useUserStore from "@/stores/user"
import AppUpload from '../components/Upload.vue';
import { songsCollection, auth } from '../includes/firebase';
import CompositionItem from '../components/CompositionItem.vue';

export default {
  name: 'Manage',
  components: {
    AppUpload,
    CompositionItem
  },
  data() {
    return {
      songs: []
    }
  },
  // this lifecycle is the earliest moment that we can request the data
  async created() {
    const snapShot = await songsCollection.where('uid', '==', auth.currentUser.uid).get()

    snapShot.forEach((document) => {
      const song = {
        ...document.data(),
        docId: document.id
      }

      this.songs.push(song);
    })
  }
  // beforeRouteLeave(to, from, next) {
  //   this.$refs.upload.cancelUploads();
  //   next();
  // }
  // beforeRouteEnter(to, from, next) {
  //     const store = useUserStore();

  //     if(store.userLoggedIn){
  //         // next function is used to redirect the visitor
  //         next();
  //     } else{
  //         next({
  //             name: "home"
  //         });
  //     }
  // }
}
</script>
