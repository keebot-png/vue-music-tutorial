<template>
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <app-upload ref="upload" :addSong="addSong" />
      </div>
      <div class="col-span-2">
        <div class="bg-white rounded border border-gray-200 relative flex flex-col">
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">{{ $t("manage.my_songs") }}</span>
            <i class="fa fa-compact-disc float-right text-green-400 text-2xl"></i>
          </div>
          <div class="p-6">
            <composition-item v-for="(song, i) in songs" :key="song.docId" 
            :song="song" 
            :updateSong="updateSong"
            :index="i"
            :removeSong="removeSong"
            :updateUnsavedFlag="updateUnsavedFlag"
            />
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
      songs: [],
      unsavedFlag: false,
    }
  },
  // this lifecycle is the earliest moment that we can request the data
  async created() {
    const snapShot = await songsCollection.where('uid', '==', auth.currentUser.uid).get();

    snapShot.forEach(this.addSong);
  },
  methods: {
    updateSong(i, values) {
      // 
      this.songs[i].modified_name = values.modified_name;
      this.songs[i].genre = values.genre;
    },
    removeSong(i) {
      this.songs.splice(i, 1);
    },
    addSong(document) {
      const song = {
        ...document.data(),
        docId: document.id
      }
    
      this.songs.push(song);
    },
    updateUnsavedFlag(value) {
      this.unsavedFlag = value
    }
  },
  beforeRouteLeave(to, from, next) {
    if(!this.unsavedFlag) {
      next();
    } else {
      const leave = confirm('You have unsaved changes. Are you sure you want to leave?');
      next(leave);
    }
  }
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
