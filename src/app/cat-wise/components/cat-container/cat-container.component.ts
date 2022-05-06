import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { CatDisplay } from 'src/app/shared/models/cat-display.interface';
@Component({
  selector: 'app-cat-container',
  templateUrl: './cat-container.component.html',
  styleUrls: ['./cat-container.component.css']
})
export class CatContainerComponent  {


  inputTouched = false;
  loading = false;
  cat: CatDisplay[] = [];

  constructor(private searchService: SearchService) { }

  handleSearch() {
    this.loading = true;
    this.searchService.getCatView()
      .subscribe((items: any) => {
        this.cat = items.map(item => {
          return( {
            title: item.snippet.title,
            videoId: item.id.videoId,
            videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            channelId: item.snippet.channelId,
            channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            publishedAt: new Date(item.snippet.publishedAt),
            thumbnail: item.snippet.thumbnails.high.url
          });
        });

        this.inputTouched = true;
        this.loading = false;
      });
  }
}

