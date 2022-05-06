import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/shared/services/search.service';
import { Popular } from 'src/app/shared/models/popular.interface';

@Component({
  selector: 'app-popular-container',
  templateUrl: './popular-container.component.html',
  styleUrls: ['./popular-container.component.css']
})
export class PopularContainerComponent  {

  inputTouched = false;
  loading = false;
  popular: Popular[] = [];

  constructor(private searchService: SearchService) { }

  handleSearch() {
    this.loading = true;
    this.searchService.getPopularVideos()
      .subscribe((items: any) => {
        this.popular = items.map(item => {
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

